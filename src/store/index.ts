import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      userId: undefined,
      userName: undefined
    }
  },
  mutations: {

  },
  actions: {
    getUserInfo:()=>{
      return {userId:'1', userName: 'a'};
    }
  },
  modules: {
  },
});
