import {UserModel} from "../models/userModel";
import {Dispatch} from "redux";
import axios from "axios";
import {UserURL} from "../../URLS/URL";

let initUsersState = {
    users: [] as UserModel[],
}
type userStateType = typeof initUsersState

type setUsers = {
    type: "SET_USERS",
    payload: UserModel[]
}

type banUser = {
    type: "BAN_USER",
    id: string,
    reason: string,
}
type razBanUser = {
    type: "RAZBAN_USER",
    id: string,
}
type deleteUser = {
    type: "DELETE_USER",
    id: string
}
type createUser = {
    type: "CREATE_USER",
    payload: UserModel
}
type userActionType = deleteUser | banUser | setUsers | createUser | razBanUser
export const UsersReducer = (state: userStateType = initUsersState, action: userActionType): userStateType => {
    switch (action.type) {
        case "SET_USERS": {
            return {...state, users: action.payload}
        }
        case "BAN_USER": {
            return {
                ...state,
                users: state.users.map(user => user._id === action.id ? {
                        ...user,
                        ban: {...user.ban, status: true, reason: action.reason}

                    }
                    : user)
            }
        }
        case "DELETE_USER": {
            return {...state, users: state.users.filter(user => user._id !== action.id)}
        }
        case "CREATE_USER": {
            return {...state, users: [...state.users, action.payload]}
        }
        case "RAZBAN_USER": {
            return {
                ...state,
                users: state.users.map(user => user._id === action.id ? {
                        ...user,
                        ban: {...user.ban, status: false, reason: ""}
                    }
                    : user)
            }
        }

        default: {
            return state;
        }
    }
}

const setUsers = (users: UserModel[]): setUsers => ({type: "SET_USERS", payload: users});

const banUser = (id: string, reason: string): banUser => ({type: "BAN_USER", reason, id});
const deleteUser = (id: string): deleteUser => ({type: "DELETE_USER", id})
const createUser = (user: UserModel): createUser => ({type: "CREATE_USER", payload: user})
const razbanUser = (id: string): razBanUser => ({type: "RAZBAN_USER", id});
export const getUsers = () => async (dispatch: Dispatch) => {
    const response = await axios.get(UserURL).then(res => res.data);
    dispatch(setUsers(response.users))
}
