<template>
    <li :class="{done: task.isCompleted, 'margin-15': isDesktop }">
        
        {{task.task}}
    </li>

</template>

<script>

export default{
    name:"TodoItem",
    props:[
        "task", "isDesktop"
    ]
    
};
</script>
<style lang="scss">
    .done{
       color: #fff;
       background: green;
       font-size: 16px; 
    }
</style>