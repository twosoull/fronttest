<template>
    아침 : <input v-model="breakfast" type="text" /> 
    <button :click="addBreakfast(this.breakfast)">얌얌</button>
    <p>아침 : {{ storedBreakfast }}</p>

    점심 : <input v-model="lunch" type="text" /> 
    <button :click="addRunch">얌얌</button>
    <p>점심 : </p>

    저녁 : <input v-model="dinner" type="text" /> 
    <button :click="addDinner">얌얌</button>
    <p>저녁 : </p>
    

</template>
<script>
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default ({
    data(){
        return {
            /**
             * 1. 1개 인풋으로 여러개 저장하는 로직을 만들거임
             * 2. 저장 store에 할거임
             * 3. 천천히 해! 괜찮아 괜찮아
             * 4. 기회가 되면 리스트로 뿌려주자.
             */

            breakfast: '',
            lunch: '',
            dinner: '' 
        }
    },
    computed : {
        ...mapMutations({
            addBreakfast : 'addBreakfast'
        }),
        ...mapGetters({
            storedBreakfast:'storedBreakfast'
        
        }),
    },

})
</script>
