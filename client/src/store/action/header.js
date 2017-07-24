export const CHANGE_HEADER_TITLE ='CHANGE_HEADER_TITLE';

export function changeHeaderTitle(dispatch,title){
    dispatch({
        type: CHANGE_HEADER_TITLE,
        payload: title
    })
}