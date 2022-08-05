<template>
    <h1>Sobre mi app</h1>
</template>
<script>

import { onBeforeRouteLeave } from 'vue-router'

export default{
    setup (){
        onBeforeRouteLeave(()=>{ /* callback se puede usar sin to, from */
        console.log("abandonando la ruta about");
        });
    },
};

</script>