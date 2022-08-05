<template>
    <input type="text" v-model="newTask" @keyup.enter="addTask"/>
</template>
<script>
import{ref} from "vue";
export default {
    setup(props, {emit}) { /* el emit manda el mensaje al padre */
        const inputText= ref("");

        const addTask= () => {
            emit("text", { inputText});
            inputText.value =""; /* limpia luego de añadir las tareas */
        }

        return {
            inputText,
        };
    },
}
</script>