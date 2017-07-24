import createAction from '../createAction';
import {REGISTER} from '../actionType';

export function changeRegisterRoom(value){
    createAction(REGISTER.CHANGE_ROOM, value);
}

export function changeRegisterNickname(dispatch, value){

}