import createAction from '../createAction';
import {USERINPUT} from '../actionType';

export function sendUserInput(value){
    return (dispatch) => {
        // .....  websocket
        console.log(value);
        // ....
        dispatch(createAction(USERINPUT.SEND));
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