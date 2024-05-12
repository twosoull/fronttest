const state = {
    breakfast : 'ddd',
    lunch : '',
    dinner : ''
}

const getters = {
    storedBreakfast(){
        return state.breakfast;
    }
}
const mutations = {
    addBreakfast(breakfast){
        state.breakfast = breakfast ;
    }
}
export default {state, getters, mutations};