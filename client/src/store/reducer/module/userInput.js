import {USERINPUT} from '../../actionType';

var defaultState = {
    value: ""
}

export default function reducer (state = defaultState , action){
    switch (action.type) {
        case USERINPUT.CLEAR:
            return {...state, value: ""};
        case USERINPUT.CHANGE:
            return {...state, value: action.payload};
        default:
            return state;
    }
}