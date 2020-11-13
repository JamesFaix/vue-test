import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld';
import InfoPage from './components/InfoPage';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/hello', component: HelloWorld },
    { path: '/info', component: InfoPage }
  ]
});

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app');
