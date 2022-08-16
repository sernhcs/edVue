
import { computed, ref} from "vue";
import { v4 as uuidv8 } from "uuid";

const useTodo =(initialValue = []) => {
    const tasks = ref(initialValue);
   
    // añadir methods
   const addTask = ({ inputText }) => {
    tasks.value.push({
        id: uuidv8(),
        task: inputText.value,
        isCompleted: false,
    });
    /* newTask.value="";  */
    };


    const completeTask = (task) => {
        //let taskSelected = tasks.value.filter(t => t.id === task.id);
        task.isCompleted = true;
    };

    const deleteTask= (taskremoved) => {
        tasks.value = tasks.value.filter(task=> task.id !== taskremoved.id)
    };

    const renameTask= (task) => {
        task.isEdit = !task.isEdit;
    };


    //computed properties
    const sizeOfCompletedTasks = computed(() => {
        const completedTasks = tasks.value.filter((task) => {
            return task.isCompleted === true;
        });
        return completedTasks.length;
    });
  

    return{
        tasks,
        addTask,
        completeTask,
        deleteTask,
        sizeOfCompletedTasks,
        renameTask,
    };
};

export default useTodo;