<template>
    <div>
        {{task.title}}
        Completed {{subTaskComplete}} of {{task.subtasks.length}} tasks
        <TaskModal :task="task" :subTaskComplete="subTaskComplete" />

        <button @click="modalState">
            Select {{ modal == 'hidden' ? 'show' : 'hidden' }} Mode
        </button>
    </div>
</template>

<script>
import TaskModal from "./TaskModal.vue";
import { mapState } from 'vuex';

    export default {
    name: "TaskCard",
    components: { TaskModal },

    fetch ({ store }) {
        store.commit('modal')
    },
    computed: mapState([
        'modal'
    ]),

    data() {
        return {
            subTaskComplete: 0,
        };
    },
    methods: {
        subTaskCompletedCount() {
            this.task.subtasks.map(s => {
                if (s.isCompleted) {
                    this.subTaskComplete++;
                }
            });
        },
        modalState () {
            this.$store.commit('modalState', this.modal == 'hidden' ? 'show' : 'hidden');
        }
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