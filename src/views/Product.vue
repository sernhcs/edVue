<template>
    <h1>
        Product view
    </h1>
    <div>
        {{ num }}
    </div>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
</template>
<script>
import {Counter} from "../mixin";

export default {
    mixins: [Counter],
    setup (){

    },
};

</script>