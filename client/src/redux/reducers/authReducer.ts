import {address, ban, UserModel} from "../models/userModel";

interface InitStateType {
    isAuth: boolean,
    user: UserModel,
}

let defaultState: InitStateType = {
    isAuth: true,
    user: {
        _id:'',
        ban:{} as ban,
        address:{} as address,
        email:'',
        lastName:'',
        firstName:'',
        role:'',
    } as UserModel,

}

type setUser = {
    type: "SET_USER",
    payload: UserModel
}
type logout = {
    type: "LOGOUT"
}


type ActionType = setUser | logout

export const AuthReducer = (state: InitStateType = defaultState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "LOGOUT": {
            localStorage.removeItem("token")
            return {
                ...state,
                user: {} as UserModel,
                isAuth: false
            }
        }
        case "SET_USER": {
            return {...state, user: action.payload, isAuth: true}
        }

        default: {
            return state
        }
    }
}
export const setUserAC = (user: UserModel): setUser => ({type: "SET_USER", payload: user})
export const logout = (): logout => ({type: "LOGOUT"})

