<template>
    <h1>Hola {{ id }} - {{lastname}}</h1>
    <!-- el $route te manda a la funcion parametro y id -->
    <div class="flex space-evenly">
    <router-link to="/users/sergio/profile"> Go to profile </router-link>
    <router-link to="/users/sergio/config"> Go to config </router-link>
    <router-view /> <!-- te manda a la ruta de forma anidada -->

    </div>
    {{message}}
</template>


<script>
import{useRoute} from 'vue-router';
export default {
    setup() {
        const route = useRoute ();
        return {
            id: route.params.id,
            lastname: route.query.lastname,
            message: route.params.message
        }
    },
}
</script>