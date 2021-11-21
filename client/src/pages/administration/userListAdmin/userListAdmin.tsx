import React, {useEffect} from 'react';
import BackNavLink from "../../../components/backNavLink/backNavLink";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../../redux/reducers/usersReducer";
import './userListAdmin.scss'
import {AppStateType} from "../../../redux/state";
import {UserModel} from "../../../redux/models/userModel";
import UserItemAdmin from "./userItemAdmin/userItemAdmin";

const UserListAdmin = () => {
    const dispatch = useDispatch()
    const userList = useSelector<AppStateType, UserModel[]>(state => state.user.users);
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <div style={{width: "100%", height: "100%"}}>
            <BackNavLink/>
            <h3 className={"userListTitle"}>Страница пользователей</h3>
            <table className={"userListTable"}>
                <thead>
                <tr>
                    <th>_id</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Почта</th>
                    <th>Адрес</th>
                    <th>Роль</th>
                    <th>Состояние</th>
                </tr>
                </thead>
                <tbody>
                {
                    userList.map((user: UserModel) => {
                        return (
                            <UserItemAdmin user={user}/>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};


export default UserListAdmin;
