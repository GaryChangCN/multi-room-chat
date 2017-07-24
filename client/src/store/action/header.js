import createAction from '../createAction';
import {HEADER} from '../actionType';

export function changeHeaderTitle(title){
    createAction(HEADER.CHANGE_TITLE,title);
}