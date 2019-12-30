import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex)

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
      axios.get("http://localhost:3000/getUsers")
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
