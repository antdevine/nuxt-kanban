<template>
    <div class="bg-white m-2">
        <button @click="modalContentState(); modalState();">
            {{task.title}}
            Completed {{subTaskComplete}} of {{task.subtasks.length}} tasks
        </button>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "TaskCard",

        data() {
            return {
                subTaskComplete: 0,
            };
        },
        async asyncData({ params }) {
            const board = params.board
            return { board }
        },

        fetch ({ store }) {
            store.commit('modalContent', 'modal')
        },
        computed: mapState([
            'modalContent',
            'modal'
        ]),
        methods: {
            subTaskCompletedCount() {
                this.task.subtasks.map(s => {
                    if (s.isCompleted) {
                        this.subTaskComplete++;
                    }
                });
            },
            modalContentState() {
                this.$store.commit('modalContentState', this.task);
            },
            modalState() {
                this.$store.commit('modalState', 'show');
            },
        },
        beforeMount() {
            this.subTaskCompletedCount();
        },
        props: {
            task: {
                type: Object,
                required: false
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>