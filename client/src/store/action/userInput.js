export const ONCHANG_USER_INPUT = 'ONCHANG_USER_INPUT';
export const SEND_USER_INPUT = 'SEND_USER_INPUT';
export const CLEAR_USER_INPUT ='CLEAR_USER_INPUT';

export function onChangeUserInput(dispatch, value){
    dispatch({
        type: ONCHANG_USER_INPUT,
        payload: value
    })
}

export function sendUserInput(dispatch, value){
    // .....  websocket
    console.log(value);
    // ....
    dispatch({
        type: CLEAR_USER_INPUT
    })
}

export function clearUserInput(dispatch){
    dispatch({
        type: CLEAR_USER_INPUT
    })
}