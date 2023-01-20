import { createApp } from "vue";

import viewBody from "./ViewBody.vue";

export default (selector) => createApp(viewBody).mount(selector);
