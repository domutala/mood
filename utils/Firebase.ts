import {
  initializeApp,
  FirebaseError,
  type FirebaseOptions,
  type FirebaseApp,
} from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  type UserCredential,
  signInWithCredential,
  type Auth,
} from "firebase/auth";

export type LoginMethod = "google" | "github";

let app: FirebaseApp;
let auth: Auth;

const supportedPopupSignInMethods = [
  GoogleAuthProvider.PROVIDER_ID,
  GithubAuthProvider.PROVIDER_ID,
];

function getProvider(providerId: string) {
  switch (providerId) {
    case GoogleAuthProvider.PROVIDER_ID:
      return GoogleAuthProvider;
    case GithubAuthProvider.PROVIDER_ID:
      return GithubAuthProvider;
    default:
      throw new Error(`No provider implemented for ${providerId}`);
  }
}

const login = async (method: LoginMethod) => {
  await auth.signOut();
  let Provider = getProvider(`${method}.com`);
  let result: UserCredential | undefined;
  try {
    result = await signInWithPopup(auth, new Provider());
  } catch (error) {
    const err = error as FirebaseError;

    if (
      err.customData &&
      err.customData.email &&
      err.code === "auth/account-exists-with-different-credential"
    ) {
      const providers = await fetchSignInMethodsForEmail(
        auth,
        err.customData.email as string
      );
      const firstPopupProviderMethod = providers.find((p: any) =>
        supportedPopupSignInMethods.includes(p)
      );

      // Test: Could this happen with email link then trying social provider?
      if (!firstPopupProviderMethod) {
        throw new Error(
          `Your account is linked to a provider that isn't supported.`
        );
      }

      Provider = getProvider(firstPopupProviderMethod);
      const linkedProvider = new Provider();
      linkedProvider.setCustomParameters({
        login_hint: err.customData.email as string,
      });

      result = await signInWithPopup(auth, linkedProvider);
    }
  }

  if (!result) return;

  const token = (await result.user.getIdTokenResult()).token;

  return token;
};

const logout = async () => {
  await auth.signOut();

  sessionStorage.removeItem("xiru.auth.token");
  sessionStorage.removeItem("xiru.auth.signInMethod");

  return;
};

const getUser = async () => {
  if (auth.currentUser) return auth.currentUser;

  try {
    const method = sessionStorage.getItem("xiru.auth.signInMethod");
    const token = sessionStorage.getItem("xiru.auth.token");

    if (method && token) {
      const Provider = getProvider(method as string);
      const credential = Provider.credential(token);
      const result = await signInWithCredential(auth, credential);
      return result.user;
    }
  } catch (error) {
    return;
  }
};

const init = async (options: FirebaseOptions) => {
  app = initializeApp(options);
  auth = getAuth(app);
};

export default { init, login, logout, getUser };
