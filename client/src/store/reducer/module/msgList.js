import {PUSH_MESSAGE_LIST, CLEAR_MESSAGE_LIST} from '../../action/msgList';

var defaultState = {
    value: []
}

export default function reducer (state = defaultState, action){
    switch (action.type) {
        case PUSH_MESSAGE_LIST:
            let value = Array.from(state.value);
            value.push(action.payload)
            return {...state, value};
        case CLEAR_MESSAGE_LIST:
            return {...state, value: []}
        default:
            return state;
    }
}