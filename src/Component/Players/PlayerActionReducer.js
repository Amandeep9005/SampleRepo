import produce from 'immer';
import GetInitialState from '../../RootReducer/GetInitialState';

export const PlayerActionReducer = produce((state=GetInitialState(),action)=>{
    switch (action.type){
    case "ADD_PLAYER":{
    state.name = "Messi";
    return state;
    }
    case "ADD_TEAM":{
        state.team = "FCB";
        return state;
        }
    case "CALL_SERVICE":{
       state.data = action.data
        return state;
        } 
    case "GET ACCESS TOKEN":{
        state.token = action.data.id_token
        sessionStorage.setItem('gb-authorization', state.token);
        return state;
        }        
    default :
        return state;
    
    }

});

