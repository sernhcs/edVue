<template>
  <!-- no deben haber dos elementos al mismo nivel se debería usar el div -->

  <!-- con el keyup manda a la presión de la tecla con el enter solo para esa tecla -->
  <!-- <input type="text" v-model="newTask" @keyup.enter="addTask"/> -->

  <TodoForm @text="addTask" />
  <div class="felx  space-evenly align-center">
    <p>Total de tareas completadas: {{ sizeOfCompletedTasks }}</p>
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
    :complete-task="completeTask" 
    :delete-task="deleteTask"
    />
  </ul>
</template>
<script>
import { v4 as uuidv8 } from "uuid";
import { onMounted, ref, watch } from "vue";
import TodoItem from "./TodoItem.vue";
import TodoForm from "./TodoForm.vue";
import useTodo from "../composables/useTodo";

export default {
  name: "todo",
  components: {
    TodoItem,
    TodoForm,
  },

  setup() {
    /* const tasks = ref(); */
    const {tasks, addTask, deleteTask, completeTask, sizeOfCompletedTasks} = useTodo();

    const activeColor = ref("#ffff");
    const background = ref("blue");
    const fontSize = ref(16);
    const isDesktop = ref(true);
    const newTask = ref("");

    onMounted(() => {
      tasks.value = 
      [
      {
        id: uuidv8(),
        task: 'Crear curso',
        isCompleted: false,
      },
      {
        id: uuidv8(),
        task: 'Revisar comentarios',
        isCompleted: false,
      },
      {
        id: uuidv8(),
        task: 'Grabar nuevas secciones',
        isCompleted: false,
      },
      {
        id: uuidv8(),
        task: 'Mejorar contenido',
        isCompleted: false,
      },

    ]
    }),


   

    //watchers
    watch(newTask, (current, prev) => {
      console.log(`se ha modificado este valor: newTask => valor previo: ${prev} - valor actual: ${current}`)
    })


 /*    const completeTask = (task) => {
      //let taskSelected = tasks.value.filter(t => t.id === task.id);
      task.isCompleted = true;
      };
    const deleteTask= (taskremoved) => {
            tasks.value = tasks.value.filter(task=> task.id !== taskremoved.id)
    }; */


    return {
      tasks,
      activeColor,
      background,
      fontSize,
      isDesktop,
      addTask,
      completeTask,
      deleteTask,
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