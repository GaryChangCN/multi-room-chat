import {REGISTER} from '../../actionType';
let defaultState = {
    roomValue : "",
    nickName : "",
    hasNickname: false,
    hasRoomValue: false
}
export default function reducer(state = defaultState, action){
    switch (action.type) {
        case REGISTER.CHANGE_ROOM:
            return {...state,roomValue:action.payload}
        case REGISTER.CHANGE_NICKNAME:
            return {...state,nickName:action.payload}
        case REGISTER.SAVE_NICKNAME:
            return {... state,hasNickname:action.payload}
        default:
            return state;
    }
}