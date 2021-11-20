import React, {useEffect, useState} from 'react';
import './userPageAdmin.scss'
import {useParams} from "react-router-dom";
import {UserModel} from "../../../../redux/models/userModel";
import {useDispatch} from "react-redux";
import axios from "axios";
import {UserURL} from "../../../../URLS/URL";
import {openNotificationWithIcon} from "../../../../components/Notification/Notification";

type params = {
    USERID: string
}
const UserPageAdmin = () => {
    const {USERID} = useParams<params>();
    const [user, setUser] = useState<UserModel>({} as UserModel)
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get(`${UserURL}/${USERID}`)
            .then(res => {
                openNotificationWithIcon("success", "Успех", "Пользователь загружен")
                console.log(res.data)
                setUser(res.data.user);
            })
            .catch(rej => {
                openNotificationWithIcon("error", "Упс", "Что то пошло не так(")
            });
    }, [USERID])
    return (
        <div>
            {
                {USERID}
            }
        </div>
    );
};

export default UserPageAdmin;
