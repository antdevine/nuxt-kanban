<template>
    <div class="bg-white absolute m-20 p-4">
        <button @click="modalState">
            CLOSE
        </button>
        {{task.title}}
        {{task.description}}
        Subtasks ({{subTaskComplete}} of {{task.subtasks ? task.subtasks.length : 0}})
        <div v-for="(subtask, index) in task.subtasks" :key="index">
            <div :class="subtask.isCompleted ? 'complete' : 'incomplete'">{{subtask.title}}</div>
        </div>
        Current Status = {{task.status}}
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    
    export default {
        name: 'TaskModalView',

        async asyncData({ params }) {
            const board = params.board
            return { board }
        },

        fetch ({ store }) {
            store.commit('modal')
        },
        computed: mapState([
            'modal',
        ]),

        data() {
            return {
            }
        },
        methods: {
            modalState () {
            this.$store.commit('modalState', 'hidden');
            },
        },
        props: {
            task: {
                type: Object,
                required: false
            },
            subTaskComplete: {
                type: Number,
                required: true
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>