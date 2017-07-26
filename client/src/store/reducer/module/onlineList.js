import {ONLINELIST} from '../../actionType';
let defaultState = {
    value: []
}

export default function reducer(state = defaultState, action){
    switch(action.type){
        case ONLINELIST.FRESH:
        return {...state, value: action.payload}
        default:
        return state;
    }
}