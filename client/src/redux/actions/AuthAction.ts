
import axios from "axios";
import {Dispatch} from "redux";
import {setUserAC} from "../reducers/authReducer";
import {AuthURL} from "../../URLS/URL";


export const auth = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(`${AuthURL}/auth`, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}}).then(res => res)
            const {password, ...user} = response.data.userFromBD
            dispatch(setUserAC(user))
        } catch (e: any) {
        }
    }
}
