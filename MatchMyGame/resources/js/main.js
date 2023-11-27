// src/main.js

import Vue from 'vue';
import App from './App.vue';
import AuthComponent from './components/AuthComponent.vue';
import SearchComponent from './components/SearchComponent.vue';
import ProfileComponent from './components/ProfileComponent.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App, [h(AuthComponent), h(SearchComponent)]),
}).$mount('#app');
Vue.use(VueRouter);

const routes = [
  { path: '/', component: App },
  { path: '/auth', component: AuthComponent },
  { path: '/search', component: SearchComponent },
  { path: '/profile/:id', component: ProfileComponent },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
