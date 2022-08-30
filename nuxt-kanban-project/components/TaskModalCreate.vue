<template>
    <div>
        <h2>Add new task</h2>
        <form @submit.prevent="newTask">
            <input type="text" placeholder="Enter Title" required v-model="taskTitle" />
            <input type="text" placeholder="Status" required v-model="taskStatus" />
            <button>Create Task</button>
        </form>
    </div>
</template>

TODO:  NEED TO GET DATA THAT IS BEING SUBMIT HERE AND THEN PUSH IT TO THE CORRECT TASK COLUMN ARRAY WITH A FILTER ON THE TODO LIST SO ITS ADDED TO THE CORRECT ONE
NEED TO HIDE AND SHOW THE MODAL TOO, I HAVE ADDED THE STATE TO THE BOARD.VUE SO NEED TO TO MAKE SURE IT HAS THE RIGHT CLASS ON

<script>
    export default {
        name: 'TaskModalCreate',
        data() {
            return {
                taskTitle: '',
                taskStatus: '',
                newTaskItem: {}
            }
        },
        methods: {
            newTask() {
                const title = {"title": this.taskTitle};
                const status = {"status": this.taskStatus};
                this.newTaskItem = {
                    ...title, 
                    ...status,
                    "description": "",
                    "subtasks": [
                        {
                        "title": "Sign up page",
                        "isCompleted": true
                        },
                    ]
                };
              
                this.$emit('newTask', this.newTaskItem);
                this.taskTitle = '';
                this.taskStatus = '';
                this.newTaskItem = '';
            }
        },
        props: {
            tasks: {
                type: Array,
                required: false
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>