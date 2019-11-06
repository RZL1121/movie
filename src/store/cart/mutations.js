import {CHANGE_CAR} from "./const"

export default {
    [CHANGE_CAR](state,cart){
        state.book = cart
    }
}