const state = {
  successSnackbar: false,
  errorSnackbar: false,
  timeoutSnackbar: 2000,
};

const mutations = {
  setSuccessSnackbar: (state, payload) => {
    state.successSnackbar = payload;
  },

  setErrorSnackbar: (state, payload) => {
    state.errorSnackbar = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
