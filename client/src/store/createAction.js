import store from './index';

export default function createAction(type, payload = null){
    store.dispatch({type,payload})
}