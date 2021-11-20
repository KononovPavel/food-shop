import {address, ban, UserModel} from "../models/userModel";

interface InitStateType {
    isAuth: boolean,
    user: UserModel,
    authError: boolean,
    Message: string,
    successRegistration:boolean,
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
    authError: false,
    Message: "",
    successRegistration:false
}

type setUser = {
    type: "SET_USER",
    payload: UserModel
}
type logout = {
    type: "LOGOUT"
}
type setMessage = {
    type: "SET_MESSAGE",
    payload: string,
}
type setSuccessReg = {
    type:"SET_SUCCESS_REG"
}

type ActionType = setUser | logout | setMessage | setSuccessReg

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
        case "SET_MESSAGE": {
            return {...state, Message: action.payload}
        }
        case "SET_SUCCESS_REG":{
            return {...state, successRegistration:true}
        }
        default: {
            return state
        }
    }
}
export const setUser = (user: UserModel): setUser => ({type: "SET_USER", payload: user})
export const logout = (): logout => ({type: "LOGOUT"})
export const setMessage = (message: string): setMessage => ({type: "SET_MESSAGE", payload: message})

