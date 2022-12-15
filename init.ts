// eslint-disable-next-line prettier/prettier
import { createApp } from "vue";
import App from "./App.vue";
import { Mood } from "./index";
import "@mood/styles/index.scss";

export default function () {
  const app = createApp(App);
  app.use(Mood);
  return app;
}
