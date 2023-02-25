import { createApp } from "vue";
import { Icon } from "@iconify/vue";
import App from "./App.vue";
import "./index.css";
import { router } from "./router";

const app = createApp(App);
app.use(router);
app.component("Icon", Icon);
app.mount("#app");
