import * as ActionTypes from '../ActionsType';

const initalaizeState={
    taskList:[],
    historyList:[]
} 
export const taskReducer=(state=initalaizeState,action)=>{
    switch (action.type) {
        case ActionTypes.DELETE_TASK:
            var newList=state.taskList.filter(x=>x.id!==action.payload);
            return  {...state,taskList:newList} ;
        case ActionTypes.ADD_TO_HISTORY:
            return { ...state,historyList:[...state.historyList,action.payload] };
        case ActionTypes.ADD_TASK:
            return {...state,taskList:[...state.taskList,action.payload]}
        case ActionTypes.SAVE_TASKS:
            return {...state,taskList:action.payload};
        default:
            return state;
    }

}