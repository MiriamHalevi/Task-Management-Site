import * as ActionTypes from '../ActionsType';


export const login=(user)=>{
    return {
        type:ActionTypes.UPDATE_CURENT_USER,
        payload:user
    }
}

export const logOut=()=>{
   
  
    return {
        type:ActionTypes.LOG_OUT
    }

}