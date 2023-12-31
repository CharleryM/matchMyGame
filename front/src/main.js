import { createApp } from "vue";
import App from "./App.vue";

import SectionCenter from "./components/sectionCenter/SectionCenter.vue";
import SectionLeft from "./components/sectionLeft/SectionLeft.vue";
import SectionRight from "./components/sectionRight/SectionRight.vue";
// import MyParameter from "./components/pageParameter/MyParameter.vue"

const app = createApp(App);

app.component("section-center", SectionCenter);
app.component("section-left", SectionLeft);
app.component("section-right", SectionRight);
// app.component('my-parameter', MyParameter)

app.mount("#app");
