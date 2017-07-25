import {MESSAGE_LIST} from '../actionType';
import createAction from '../createAction';

export function updateMessageList(){
    return (dispatch) => {
        dispatch(
            createAction(MESSAGE_LIST.PUSH,{
                user: '张三',
                time: new Date(),
                msg: '发了一堆信息'
            })
        );
    }
}

export function clearMessageList(){
    return (dispatch) => {
        dispatch(createAction(MESSAGE_LIST.CLEAR));
    }
}