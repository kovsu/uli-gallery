import { createApp } from "vue";
import { Icon } from "@iconify/vue";
import App from "./App.vue";
import "./index.css";

const app = createApp(App);
app.component("Icon", Icon);
app.mount("#app");
