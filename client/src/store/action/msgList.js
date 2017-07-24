export const PUSH_MESSAGE_LIST = 'PUSH_MESSAGE_LIST';
export const CLEAR_MESSAGE_LIST = 'CLEAR_MESSAGE_LIST';

export function updateMessageList(dispatch){
    dispatch({
        type: PUSH_MESSAGE_LIST,
        payload: {
            user: '张三',
            time: new Date(),
            msg: '发了一堆信息'
        }
    })
}

export function clearMessageList(dispatch){
    dispatch({
        type: CLEAR_MESSAGE_LIST
    });
}