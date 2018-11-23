import { createStore, applyMiddleware } from 'redux';

const reducer = (state, action) => {
    if (action.type === "setClock") {
        return {
            ...state,
            clocks: action.clocks
        }
    } else if (action.type === "formShow") {
        return {
            ...state,
            formShow: action.formShow,
            iconShow: action.iconShow
        }
    }
    return state;

}

export default createStore(reducer, {formShow: "hidden", iconShow: ""}, applyMiddleware());