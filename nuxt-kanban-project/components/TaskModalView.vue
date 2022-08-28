<template>
    <div>
        {{task.title}}
        {{task.description}}
        Subtasks ({{subTaskComplete}} of {{task.subtasks.length}})
        <div v-for="(subtask, index) in task.subtasks" :key="index">
            <div :class="subtask.isCompleted ? 'complete' : 'incomplete'">{{subtask.title}}</div>
        </div>
        Current Status = {{task.status}}
    </div>
</template>

<script>
    export default {
        name: 'TaskModalView',
        data() {
            return {
            }
        },
        methods: {
            
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