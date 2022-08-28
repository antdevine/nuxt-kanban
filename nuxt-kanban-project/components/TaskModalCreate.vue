<template>
    <div>
        <h2>Add new task</h2>
        <input type="text" placeholder="Enter Title" required v-model="inputValue" />
        <button @click="$emit('newTask', inputValue)">Create Task</button>
    </div>
</template>

TODO:  NEED TO GET DATA THAT IS BEING SUBMIT HERE AND THEN PUSH IT TO THE CORRECT TASK COLUMN ARRAY WITH A FILTER ON THE TODO LIST SO ITS ADDED TO THE CORRECT ONE
NEED TO HIDE AND SHOW THE MODAL TOO, I HAVE ADDED THE STATE TO THE BOARD.VUE SO NEED TO TO MAKE SURE IT HAS THE RIGHT CLASS ON

<script>
    export default {
        name: 'TaskModalCreate',
        data() {
            return {
            }
        },
        methods: {
            
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