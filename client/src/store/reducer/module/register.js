import {REGISTER} from '../../actionType';
let defaultState = {
    roomId : "",
    nickName : "",
    hasNickname: false,
    hasRoomId: false
}
export default function reducer(state = defaultState, action){
    switch (action.type) {
        case REGISTER.CHANGE_ROOM:
            return {...state,roomId:action.payload}
        case REGISTER.SAVE_ROOM:
            return {...state,hasRoomId:action.payload}
        case REGISTER.CHANGE_NICKNAME:
            return {...state,nickName:action.payload}
        case REGISTER.SAVE_NICKNAME:
            return {... state,hasNickname:action.payload}
        default:
            return state;
    }
}