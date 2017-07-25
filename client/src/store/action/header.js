import createAction from '../createAction';
import {HEADER} from '../actionType';

export function changeHeaderTitle(title){
    return (dispatch) => {
        dispatch(createAction(HEADER.CHANGE_TITLE,title));
    }
}