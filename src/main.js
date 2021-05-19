import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import 'vue-search-select/dist/VueSearchSelect.css'
createApp(App).use(store).mount("#app");
