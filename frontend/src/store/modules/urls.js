import api from "../../plugins/api";

const state = {
  urls: [],
};

const actions = {
  async shortUrl({ commit }, { url }) {
    const token = await api.shortURL(url);
    commit("addUrl", { url, token });
  },

  // eslint-disable-next-line no-unused-vars
  async getUrlInfo({ commit }, { token }) {
    return await api.getUrlInfo(token);
  },
};

const mutations = {
  setUrls: (state, payload) => {
    state.urls = payload;
  },

  addUrl: (state, payload) => {
    state.urls.unshift(payload);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
