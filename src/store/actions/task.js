import * as ActionTypes from '../ActionsType';
import axios from "axios";

export const getAllTasks=(id)=>{
    return dispach =>{
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .then((response) =>  dispach(saveAllTask(response.data)))
        .then((json) => console.log(json));
    }
    }
export const saveAllTask=(taskList)=>{
        return {  
            type:ActionTypes.SAVE_TASKS,
            payload:taskList
        }
        }
export const deleteTask=(id)=>{
return {  
    type:ActionTypes.DELETE_TASK,
    payload:id
}
}
export const addToHistory=(task)=>{
    return {  
        type:ActionTypes.ADD_TO_HISTORY,
        payload:task
    }
    }
export const upadateDone=(task)=>{
    return dispach=>{
        dispach(deleteTask(task.id))
        dispach(addToHistory(task))
    }
    }
export const addTask=(task)=>{
        return {  
            type:ActionTypes.ADD_TASK,
            payload:task
        }
}
