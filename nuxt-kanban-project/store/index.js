export const state = () => ({
    contrast: 'light',
    modal: 'hidden',
    modalContent: {},
  });
  
  export const mutations = {
    contrastMode (state, payload) {
        state.contrast = payload;
    },
    modalState (state, payload) {
      state.modal = payload;
    },
    modalContentState (state, payload) {
      state.modalContent = payload;
    },
  }