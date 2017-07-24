var defaultState = {
    value: [1,2,34,5,6,7],
    owner: 2   
}

export default function reducer(state = defaultState, action){
    switch(action.type){
        default:
        return state;
    }
}