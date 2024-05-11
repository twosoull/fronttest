<template>
    <input v-model="eat" type="text" /> 
    <button>얌얌</button>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return {
            eat:''
        }
    }

})
</script>
