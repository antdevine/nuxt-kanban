export const state = () => ({
    contrast: 'light',
    modal: 'hidden'
  });
  
  export const mutations = {
    contrastMode (state, payload) {
        state.contrast = payload;
    },
    modalState (state, payload) {
      state.modal = payload;
    },
  }