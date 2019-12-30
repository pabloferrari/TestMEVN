import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USERS_LIST(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    //cats
    getUsersList(context) {
      context.commit("SET_USERS_LIST", []);
      Vue.axios.get("http://localhost:3000/getUsers")
      .then(({ data }) => {
        context.commit("SET_USERS_LIST", data.users);
      })
      .catch(() => {
        context.commit("SET_USERS_LIST", []);
      });
    },
  },
  modules: {
  }
})
