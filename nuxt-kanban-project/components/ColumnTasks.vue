<template>
    <div>
        <h2>{{ columnName }}</h2>
        <div v-for="(task, index) in tasks" :key="index">
            <TaskCard :task="task" @openTask="openModal" />
        </div>
    </div>
</template>

<script>
import TaskCard from "./TaskCard.vue";

    export default {
    name: "ColumnTasks",
    components: {TaskCard},

    data() {
        return {
            
        };
    },
    methods: {
      openModal(value) {
        console.log(value, 'task');
      }
    },
    props: {
        tasks: {
            type: Array,
            required: false
        },
        columnName: {
            type: String,
            required: false
        }
    },
}
</script>

<style lang="scss" scoped>

</style>