
<template>
   <h1> {{ title }} </h1> 
   <!--  {{reverseMessage ()}}
   !-- el reverseMessage () almacena  --> 
  <p v-if="isVisible">  {{ description }}</p>
  <p v-else>Este es un mensaje que se oculta</p> 
  <div class="flex space-evenly">
      <router-link to="/"> Ir a Inicio</router-link>
      <router-link to="/login"> Ir a login</router-link>
      <router-link to="/about"> Ir a about</router-link>
  </div>
     
  <button class="btn" @click="goToUrl('/users/sergio')">  Ir a usuario  </button>
 
  <router-view /> 
  
</template>
 
<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {onBeforeUnmount, onMounted, ref} from 'vue';
import { useRouter} from 'vue-router';
 
export default {
  name:"App",
  
  setup(){
    // propiedades reactivas
    const title= ref("Hi");
    const description = ref("Mi primer vue");
    const isVisible = ref(true);
    const name= ref("Sergio");
    const router = useRouter(); /* $router reemplazando */
 
    //metodos de ciclo de vida 
    onMounted(() => {
     /*  console.log('el componente ha sido montado a mi aplicación'); */
      title.value= 'Bienvenidos al curso de Vue.js';
    });

    onBeforeUnmount(() => {
      console.log('componente desmontado');

    });

    const goToUrl =() => {
        router.push({
          name:'User', 
          params:{id: name.value, message: title.value},
          query: { lastname:"Castillo"},
        });
    };

    return{
      title,
      description,
      isVisible,
      goToUrl,
      name,
    };
  },
   data (){
   return {
     message: 'Hola Ed'
    };
  }, 
/*   methods:{
   cometnario> this trae los valores, split elimina los espacios, reverse, join une el arreglo 
    reverseMessage: function() {
      return this.message.split("").reverse().join("")
   }
  }  */
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

.flex{
  display: flex;
  max-width: 500px;
  margin:auto;
}

.space-evenly{
justify-content: space-evenly;
}
.space-between{
  justify-content: space-between;
}
.align-center{
  align-items: center;
}
.btn {
  background: blue;
  color: #fff;
  padding: 10px 20px;
  margin: 15px;
  border-style: none;
}

</style>
