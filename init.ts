// eslint-disable-next-line prettier/prettier
import type { FirebaseOptions } from "firebase/app";
import { createApp } from "vue";
import App from "./App.vue";
import { Mood } from "./index";
import firebase from "./utils/Firebase";

export default function (options?: { firebaseOptions?: FirebaseOptions }) {
  const app = createApp(App);
  app.use(Mood);

  if (options && options.firebaseOptions) {
    firebase.init(options.firebaseOptions);
  }

  return app;
}
