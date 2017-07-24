var defaultState = {
	title:'name'
}
import {CHANGE_HEADER_TITLE} from '../../action/header';
function reducer(state = defaultState, action) {
	switch (action.type) {
		case CHANGE_HEADER_TITLE:
			return {...state, title: action.payload};
		default:
			return state;
	}
}
export default reducer;