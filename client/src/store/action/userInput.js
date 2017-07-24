import createAction from '../createAction';
import {USERINPUT} from '../actionType';

export function sendUserInput(value){
    // .....  websocket
    console.log(value);
    // ....
    createAction(USERINPUT.SEND);
    createAction(USERINPUT.CLEAR);
}

export function clearUserInput(){
    createAction(USERINPUT.CLEAR);
}

export function onChangeUserInput(value){
    createAction(USERINPUT.CHANGE, value);
}