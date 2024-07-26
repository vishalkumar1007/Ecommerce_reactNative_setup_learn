import { ADD_TO_CARD, REMOVE_FROM_CARD } from "./constants";


const initialState = [];

export const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CARD:
            return [
                ...state,
                action.data
            ]
    
        case REMOVE_FROM_CARD:
            // const deleteData = state.filter((element)=>{return element.id!=action.data })
            const deleteData = [];
            state.forEach((element)=>{
                if(element.id !== action.data){
                    deleteData.push(element);
                }
            })
            return [...deleteData]
    
        default:
            return state
    }
}