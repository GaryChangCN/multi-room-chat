import {MESSAGE_LIST} from '../actionType';
import createAction from '../createAction';

export function updateMessageList(){
    createAction(MESSAGE_LIST.PUSH,{
        user: '张三',
        time: new Date(),
        msg: '发了一堆信息'
    })
}

export function clearMessageList(){
    createAction(MESSAGE_LIST.CLEAR)
}