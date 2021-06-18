const state = {
  showSettingsDialog: false,
  language: undefined,
};

const mutations = {
  setShowSettingsDialog: (state, payload) => {
    state.showSettingsDialog = payload;
  },

  setLanguage: (state, payload) => {
    state.language = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
