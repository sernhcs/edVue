<template>
    <h1>Hola Mundo</h1> 
    <Todo/>
   
</template>

<script>
    import Todo from "../components/todo.vue" ;  // importa los datos
    export default {
     components: {
        Todo,
     },   
    };
</script>