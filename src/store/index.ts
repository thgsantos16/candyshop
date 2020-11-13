import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Mutations
const SET_API_URL = 'SET_API_URL';
const SET_TOKEN = 'SET_TOKEN';
const SET_USER = 'SET_USER';
const LOGOFF = 'LOGOFF';

export default new Vuex.Store({
  state: {
    apiUrl: '',
    user: (localStorage.getItem('user-data') !== null
      ? JSON.parse(localStorage.getItem('user-data') as string)
      : null) || null,
    token: (localStorage.getItem('user-token') !== null
      ? JSON.parse(localStorage.getItem('user-token') as string)
      : null) || null,
  },
  mutations: {
    SET_API_URL(state, api) {
      state.apiUrl = api;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGOFF(state, token) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    setApiUrl(context, api: string) {
      context.commit(SET_API_URL, api);
    },
    setUser(context, user: object) {
      localStorage.setItem('user-data', JSON.stringify(user));
      context.commit(SET_USER, user);
    },
    setToken(context, token: object) {
      localStorage.setItem('user-token', JSON.stringify(token));
      context.commit(SET_TOKEN, token);
    },
    logoff(context) {
      context.commit(LOGOFF);
      localStorage.clear();
    },
  },
  modules: {
  },
  getters: {
    USER: (state) => state.user,
    TOKEN: (state) => state.token,
  },
});
