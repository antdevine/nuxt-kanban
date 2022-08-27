<template>
  <div :class="contrast == 'light' ? 'bg-yellow-200' : 'bg-blue-700 text-white'">
    <Navigation />
    <Nuxt />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Navigation from '../components/Navigation.vue';

  export default ({
      components: { Navigation },
      fetch ({ store }) {
            store.commit('contrast')
        },
        computed: mapState([
            'contrast'
        ]),
  })
</script>
