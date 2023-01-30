const InitialState = {
    counter : 0
}
const counterReducer = (state= InitialState,action) =>{
switch(action.type){
    case "INCREMENT": 
    return{...state , counter: state.counter+1};
    case "DECREMENT" : 
    return{ ...state , counter : state.counter-1}
}

}

export {counterReducer}