<template>
    <div>
        <div v-for="(task, index) in tasks" :key="index">
            {{task.title}}
            <TasksSubTasksCount :subTask="task.subtasks" />
        </div>
    </div>
</template>

<script>
import TasksSubTasksCount from "./TasksSubTasksCount.vue";
    export default {
    name: "TaskCard",
    components: {TasksSubTasksCount},
    data() {
        return {
            
        };
    },
    props: {
        tasks: {
            type: Array,
            required: false
        },
    },
}
</script>

<style lang="scss" scoped>

</style>