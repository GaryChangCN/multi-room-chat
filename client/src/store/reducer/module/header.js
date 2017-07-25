var defaultState = {
    title:'聊天室'
}
import {HEADER} from '../../actionType';
function reducer(state = defaultState, action) {
	switch (action.type) {
		case HEADER.CHANGE_TITLE:
			return {...state, title: action.payload};
		default:
			return state;
	}
}
export default reducer;