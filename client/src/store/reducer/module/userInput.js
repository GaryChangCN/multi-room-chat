import {ONCHANG_USER_INPUT,CLEAR_USER_INPUT} from '../../action/userInput';

var defaultState = {
    value: ""
}

export default function reducer (state = defaultState , action){
    switch (action.type) {
        case CLEAR_USER_INPUT:
            return {...state, value: ""};
        case ONCHANG_USER_INPUT:
            return {...state, value: action.payload};
        default:
            return state;
    }
}