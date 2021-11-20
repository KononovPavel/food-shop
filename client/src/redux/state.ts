import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from "redux-thunk";
import {AuthReducer} from "./reducers/authReducer";
import {shopReducer} from "./reducers/shopReducer";
import {UsersReducer} from "./reducers/usersReducer";


const rootReducer = combineReducers({
    auth: AuthReducer,
    shop:shopReducer,
    user:UsersReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))


// @ts-ignore
window.store = store
