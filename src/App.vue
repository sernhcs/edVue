
<template>
   <h1> {{ title }} </h1> 
   {{reverseMessage ()}}
   <!-- el reverseMessage () almacena  -->
  <p v-if="isVisible">  {{ description }}</p>
  <p v-else>Este es un mensaje que se oculta</p> 
 
  <Todo />
</template>
 
<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {onBeforeUnmount, onMounted, ref} from 'vue';
import Todo from './components/Todo.vue';  // importa los datos
export default {
  name:"App",
  components: {
    Todo,
  },
  setup(){
    // propiedades reactivas
    const title= ref("Hi");
    const description = ref("Mi primer vue");
    const isVisible = ref(false);
 
    //metodos de ciclo de vida 
    onMounted(() => {
      console.log('el componente ha sido montado a mi aplicación');
      title.value= 'Bienvenidos al curso de Vue.js';
    });

    onBeforeUnmount(() => {
      console.log('componente desmontado');

    });

    return{
      title,
      description,
      isVisible,
    };
  },
   data (){
   return {
     message: 'Hola Ed'
    };
  }, 
  methods:{
    /* this trae los valores, split elimina los espacios, reverse, join une el arreglo */
    reverseMessage: function() {
      return this.message.split("").reverse().join("")
    }
  }
};

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.margin-15{
  margin-bottom: 15px;
}
</style>
