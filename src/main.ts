// eslint-disable-next-line prettier/prettier
import { createApp } from "vue";
import App from "./App.vue";
// import mood from "./plugin";

const app = createApp(App);
// app.use(mood);

app.mount("#app");
