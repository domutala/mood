import firebase, { type LoginMethod } from "@/mood/utils/Firebase";

export const withFirebaseToken = async (method: LoginMethod) => {
  try {
    const token = await firebase.login(method);

    return token;
  } catch (error) {
    console.error(error);
  }
};
