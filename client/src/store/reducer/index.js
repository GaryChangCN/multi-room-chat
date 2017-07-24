import {combineReducers} from 'redux';

import header from './module/header';
import onlineList from './module/onlineList';
import msgList from './module/msgList';
import userInput from './module/userInput';

export default combineReducers({
    header,
    onlineList,
    msgList,
    userInput
});