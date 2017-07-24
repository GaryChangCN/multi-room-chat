import {MESSAGE_LIST} from '../../actionType';

var defaultState = {
    value: []
}

export default function reducer (state = defaultState, action){
    switch (action.type) {
        case MESSAGE_LIST.PUSH:
            let value = Array.from(state.value);
            value.push(action.payload)
            return {...state, value};
        case MESSAGE_LIST.CLEAR:
            return {...state, value: []}
        default:
            return state;
    }
}