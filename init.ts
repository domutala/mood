// eslint-disable-next-line prettier/prettier
import { createApp } from "vue";
import App from "./App.vue";
import { Mood } from "./index";

export default function () {
  const app = createApp(App);
  app.use(Mood);
  return app;
}
