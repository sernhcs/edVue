<template>
    <li class="flex space-between align-center" :class="{done: task.isCompleted, 'margin-15': isDesktop }">
        <span> {{ task.task}}</span>
        <div> 
           <TodoItemBtn 
           :handle-click="completeTask" 
           :task="task" 
           :hide-on-completed="true" 
           text-class="complete">
            <i class="fas fa-check"></i>
           </TodoItemBtn>  
           <TodoItemBtn 
           :handle-click="deleteTask" 
           :task="task" 
           text-class="delete">
            <i class="fas fa-times"></i>
           </TodoItemBtn>
        </div>
    </li>
    </template>

<script>
import TodoItemBtn from './TodoItemBtn.vue';

export default{
    name: "TodoItem",
    props: {
        task: Object,
        isDesktop: Boolean, 
        completeTask: Function,
        deleteTask: Function,
        },
    setup() {
        // const completeTask = () => {
        //     console.log("Tarea completada");
        // };
        // return {
        //     completeTask,
        // };
    },
    components: { TodoItemBtn }
};
</script>
<style lang="scss">
    .done{
       color: #fff;
       background: #3eaf7c;
       font-size: 16px; 
    }
</style>