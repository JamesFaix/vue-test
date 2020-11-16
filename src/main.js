import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import HelloWorld from './components/HelloWorld';
import CounterPage from './components/CounterPage';

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/hello', component: HelloWorld },
    { path: '/counter', component: CounterPage }
  ]
});

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
      console.log('incremented to ' + this.$store.state.count);
    },
    decrement(state) {
      state.count--;
      console.log('decremented to ' + this.$store.state.count);
    }
  }
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
