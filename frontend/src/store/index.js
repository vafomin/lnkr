import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import createMutationsSharer from "vuex-shared-mutations";
import SecureLS from "secure-ls";

import urls from "./modules/urls";

let ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

const dataState = createPersistedState({
  paths: ["urls"],
  storage: {
    getItem: (key) => ls.get(key),
    setItem: (key, value) => ls.set(key, value),
    removeItem: (key) => ls.remove(key),
  },
});

const sharedMutation = createMutationsSharer({
  predicate: ["urls/setUrls"],
});

export const store = new Vuex.Store({
  modules: {
    urls,
  },
  plugins: [dataState, sharedMutation],
});

export default store;
