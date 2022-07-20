import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./authReducer/reducer";


const rootReducer=combineReducers({
    appReducer:appReducer
})

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store= legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)));