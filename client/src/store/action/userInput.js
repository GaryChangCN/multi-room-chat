import createAction from '../createAction';
import {USERINPUT} from '../actionType';
import {fetchSendUserInput} from '../../service';

export function sendUserInput(message){
    return (dispatch) => {
        fetchSendUserInput(message);
        
        dispatch(createAction(USERINPUT.CLEAR));
    }
}

export function clearUserInput(){
    return (dispatch) => {
        dispatch(createAction(USERINPUT.CLEAR));
    }
}

export function onChangeUserInput(value){
    return (dispatch) => {
        dispatch(createAction(USERINPUT.CHANGE, value));
    }
}