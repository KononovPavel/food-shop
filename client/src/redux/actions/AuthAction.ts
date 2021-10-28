import {LoginForm, registrationForm} from "../../types/formData";
import axios from "axios";
import {Dispatch} from "redux";
import {setUser} from "../reducers/authReducer";


const URL = "http://localhost:5000/api"

export const registration = async (value: registrationForm) => {
    try {
        const response = await axios.post(`${URL}/registration`, value).then(res => res)
        alert(response.data.message);
    } catch (e: any) {
        alert(e.response.data.message)
    }
}

export const login = (value: LoginForm) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.post(`${URL}/login`, value).then(res => res)
            const {password, ...user} = response.data.findUserFromBD
            dispatch(setUser(user))
            localStorage.setItem("token", response.data.token)
        } catch (e: any) {
            alert(e.response.data.message)
        }
    }
}
export const auth = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(`${URL}/auth`, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}}).then(res => res)
            const {password, ...user} = response.data.userFromBD
            dispatch(setUser(user))
        } catch (e: any) {
           console.log(e.response.data.message)
        }
    }
}
