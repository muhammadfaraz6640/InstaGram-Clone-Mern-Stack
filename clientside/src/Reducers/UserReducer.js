export const initialState = null

export const Reducer = (state,action)=>{   //action->dispatch->(type,payload)

    if(action.type=="USER"){
        return action.payload
    }
    if(action.type=="CLEAR"){
        return null
    }
    return state
}