import {ONLINELIST} from '../actionType';
import createAction from '../createAction';

export function freshOnlineList(onlineList){
    return (dispatch) => {
        dispatch(createAction(ONLINELIST.FRESH, onlineList))
    }
}