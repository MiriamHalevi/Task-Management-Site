import * as ActionTypes from '../ActionsType';
const initalaizeState={
    currentUser:null
}
export const usersReducer=(state=initalaizeState,action)=>{
switch (action.type) {
    case ActionTypes.UPDATE_CURENT_USER:
        return {...state,currentUser:action.payload};
    case ActionTypes.LOG_OUT:
        return {...state,currentUser:null};
    default:
       return state;
}
}