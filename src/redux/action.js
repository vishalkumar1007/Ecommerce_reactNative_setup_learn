import {ADD_TO_CARD} from './constants'
import {REMOVE_FROM_CARD} from './constants'

export const addToCard = (item)=>{
    return {
        type:ADD_TO_CARD,
        data : item,
    }
}
export const removeFromCard = (item)=>{
    return {
        type:REMOVE_FROM_CARD,
        data : item,
    }
}