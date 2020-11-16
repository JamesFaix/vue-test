import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import HelloWorld from './components/HelloWorld';
import CounterPage from './components/CounterPage';
import { store } from './store';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/hello', component: HelloWorld },
    { path: '/counter', component: CounterPage }
  ]
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
