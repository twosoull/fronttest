import { createStore } from "vuex";
import eat from './modules/eat'

export const store = createStore({
    modules :{
        eat
    }
})