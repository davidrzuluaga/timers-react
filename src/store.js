import { createStore, applyMiddleware } from 'redux';

const reducer = (state, action) => {
    if (action.type === "setClock") {
        return {
            ...state,
            clocks: action.clocks
        }
    } 
    return state;

}

export default createStore(reducer, {}, applyMiddleware());