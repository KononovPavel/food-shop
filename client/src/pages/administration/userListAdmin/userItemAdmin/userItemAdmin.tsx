import React from 'react';
import './userItemAdmin.scss'
import {UserModel} from "../../../../redux/models/userModel";
import {useHistory} from 'react-router-dom';
type PropsType = {
    user:UserModel
}
const UserItemAdmin:React.FC<PropsType> = ({user}) => {
    const history = useHistory();
    return (
        <tr onClick={()=> history.push(`/administration/userList/${user._id}`)} className={user.ban && user.ban.status? "userItem isBlocked": "userItem"}>
            <td>{user._id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{ user.address && Object.keys(user.address).length !== 0
                ? `${user.address.country} ${user.address.city} ${user.address.street}`
                : "Не задан"
            }</td>
            <td>{user.role}</td>
            <td>{user.ban.status ? "Заблокирован" : "Свободный"}</td>
        </tr>
    );
};

export default UserItemAdmin;
