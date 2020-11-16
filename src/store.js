import Vue from 'vue';
import Vuex from 'vuex';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    [INCREMENT] (state) {
      state.count++;
      console.log('incremented to ' + this.state.count);
    },
    [DECREMENT] (state) {
      state.count--;
      console.log('decremented to ' + this.state.count);
    }
  }
});
