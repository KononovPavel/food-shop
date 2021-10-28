import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from "redux-thunk";
import {AuthReducer} from "./reducers/authReducer";

const rootReducer = combineReducers({
    auth: AuthReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))


// @ts-ignore
window.store = store
