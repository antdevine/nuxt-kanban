<template>
    <div>
        <button @click="contrastMode">
            Select {{ contrast == 'light' ? 'dark' : 'light' }} Mode
        </button>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'ContrastMode',

        fetch ({ store }) {
            store.commit('contrast')
        },
        computed: mapState([
            'contrast'
        ]),
        methods: {
            contrastMode () {
                this.$store.commit('contrastMode', this.contrast == 'light' ? 'dark' : 'light');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>