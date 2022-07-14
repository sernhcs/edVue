<template>
<!-- no deben haber dos elementos al mismo nivel se debería usar el div -->

<!-- con el keyup manda a la presión de la tecla con el enter solo para esa tecla -->
 <input type="text" v-model="newTask" @keyup.enter="addTask"/>
 <div class="">
  <p>Total de tareas: {{sizeOfCompletedTasks}}</p>
 </div>
 <ul>
   
    <!--  
     v else es el sino, en este caso si es falso aparece, si es verdadero aparece el otro mensaje de description
     v-bind enlaza y los task.ids, se puede reemplazar :
    -->
   <TodoItem
          
    v-for="task in tasks" 
    :key="task.id"
    :task="task"
    :is-desktop="isDesktop"
    />
  </ul>
</template>
<script>
import{ v4 as uuidv8 } from "uuid";
import { computed, ref, watch    } from "vue";
import TodoItem from "./TodoItem.vue";

export default {
  name: "todo",
  components: {
    TodoItem,
},


  setup () {
    const tasks = ref([
      {
        id:uuidv8(),
        task: 'Crear curso',
        isCompleted: true
      },
      {
        id:uuidv8(),
        task: 'Revisar comentarios',
        isCompleted: true
      },
      {
        id:uuidv8(),
        task: 'Grabar nuevas secciones',
        isCompleted: false
      }, 
      {
        id:uuidv8(),
        task: 'Mejorar contenido',
        isCompleted: false
      },
      
    ]); 
    const activeColor = ref("#ffff");
    const background = ref("blue");
    const fontSize = ref(16);
    const isDesktop = ref(true);
    const newTask = ref("");
 

// añadir methods
    const addTask = ()=>{
      tasks.value.push({
        id:uuidv8(),
        task: newTask.value,
        isCompleted: false,
      });
      newTask.value="";
    }

//computed properties
const sizeOfCompletedTasks = computed(() =>{
  const completedTasks = tasks.value.filter((task)=> {
    return task.isCompleted === true;
  });
  return completedTasks.length;
});


//watchers
watch(newTask, (current, prev)=> {
  console.log(`se ha modificado este valor: newTask => valor previo: ${prev} - valor actual: ${current}`)
})


    return  {
      tasks,
      activeColor,
      background,
      fontSize,
      isDesktop,
      addTask,
      newTask,
      sizeOfCompletedTasks,
    }
  }
/*   data(){
    return{
     tasks : [
        {
          id:uuidv8(),
          task: 'Crear curso',
          isCompleted: false
        },
        {
          id:uuidv8(),
          task: 'Revisar comentarios',
          isCompleted: false
        },
        {
          id:uuidv8(),
          task: 'Grabar nuevas secciones',
          isCompleted: false
        }, 
        {
          id:uuidv8(),
          task: 'Mejorar contenido',
          isCompleted: false
        },
      ],
      activeColor: "#fff",
      background:'green',
      fontSize: 16,
      isDesktop: true,
      newTask:"",
    };
  }, */
  /* methods: {
    addTask(){
      console.log('tecla presionada');
      this.tasks.push({
        id:uuidv8(),
        task: this.newTask,
        isCompleted: false,
      });
      this.newTask="";
    }
  } */
};       
/* return {
          title: "Hi",
          description:"Este es mi primer vue",
          isVisible: true,
          tasks:  */
</script>
<style>

</style>