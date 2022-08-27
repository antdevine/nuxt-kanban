export const state = () => ({
    contrast: 'light'
  })
  
  export const mutations = {
    contrastMode (state, payload) {
        state.contrast = payload;
    }
  }