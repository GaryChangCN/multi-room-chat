import {MESSAGE_LIST} from '../actionType';
import createAction from '../createAction';

export function updateMessageList(data){
    return (dispatch) => {
        dispatch(
            createAction(MESSAGE_LIST.PUSH, data)
        );
    }
}

export function clearMessageList(){
    return (dispatch) => {
        dispatch(createAction(MESSAGE_LIST.CLEAR));
    }
}

