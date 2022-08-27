<template>
    <div>
        <p>{{subTaskComplete}} of {{subTaskData.length}} subtasks</p>
    </div>
</template>

<script>
    export default {
        name: 'TaskSubTasksCount',
        data() {
            return {
                subTaskComplete: 0,
                subTaskData: []
            }
        },
        methods: {
            subTaskCompletedCount() {
                this.subTaskData.map(s => {
                    if (s.isCompleted) {
                        this.subTaskComplete++;
                    }
                });
            }
        },
        beforeMount() {
            this.subTaskData = this.subTask;
            this.subTaskCompletedCount();
        },
        props: {
            subTask: {
                type: Array,
                required: false
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>