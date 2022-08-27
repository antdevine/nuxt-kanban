<template>
  <div :class="contrast == 'light' ? 'bg-yellow-200' : 'bg-blue-700 text-white'">
    <MainNavigation />
    <Nuxt />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import MainNavigation from '../components/MainNavigation.vue';

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
