import React, {useEffect, useState} from 'react';
import './userPageAdmin.scss'
import {useParams} from "react-router-dom";
import {UserModel} from "../../../../redux/models/userModel";
import {useDispatch} from "react-redux";
import axios from "axios";
import {UserURL} from "../../../../URLS/URL";
import {openNotificationWithIcon} from "../../../../components/Notification/Notification";
import BackNavLink from "../../../../components/backNavLink/backNavLink";
import {OrderModel} from "../../../../redux/models/orderModel";
import {Button} from "antd";

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
                openNotificationWithIcon("error", rej.message, "Что то пошло не так(")
            });
    }, [USERID, dispatch])


    const blockedUser = async (userID: string) => {
        await axios.put(`${UserURL}/ban`, {reason: "Стандартная блокировка",id:userID})
            .then(
                () => {
                    openNotificationWithIcon("success", "Успех", "Пользователь был заблокирован")
                    setUser({...user, ban: {...user.ban, status: true, reason: "Стандартная блокировка"}})

                }
            )
            .catch(() => {
                openNotificationWithIcon("error", "Упс", "Провал")

            })
    }
    const razBlockedUser = async (userID: string) => {
        await axios.put(`${UserURL}/razban`, {id:userID})
            .then(
                () => {
                    openNotificationWithIcon("success", "Успех", "Пользователь был разблокирован")
                    setUser({...user, ban: {...user.ban, status: false, reason: ""}})
                }
            )
            .catch(() => {
                openNotificationWithIcon("error", "Упс", "Провал")
            })
    }


    return (
        <div style={{width: "100%"}}>
            <BackNavLink linkURL={"/administration/userList"}/>
            {
                user.ban && user.ban.status
                    ?
                    <span>
                            <Button onClick={()=> razBlockedUser(user._id)} style={{marginLeft: "50px", background: "#58eb34"}}
                                    type={"primary"}>Разблокировать</Button>
                            Причина : {user.ban.reason}
                        </span>
                    : <Button onClick={() => blockedUser(user._id)} style={{marginLeft: "50px"}} type={"primary"}
                              danger={true}>Заблокировать</Button>
            }
            <div>
                {user.ban && user.ban.status ? <span>Заблокирован</span> : ""}
            </div>
            <div style={{width: "100%"}}>
                Подробные данные о пользователе : {user._id}
                <div style={{width: "100%"}}>
                    <div className={"userInfo"}>
                        <img
                            src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg"
                            alt="" width={100} height={100}/>
                        <div className={"userInfo_sensitive"}>
                            <span className={"userInfo_data"}>Имя : {user.firstName}</span>
                            <span className={"userInfo_data"}>Фамилия : {user.lastName}</span>
                            <span className={"userInfo_data"}>Почта : {user.email}</span>
                            <span className={"userInfo_data"}>Роль : {user.role}</span>
                        </div>
                        <div className={"userInfo_sensitive"}>
                            <div className={"userInfo_data"}>Страна
                                : {user.address && user.address.country ? user.address.country : "Не указана"}</div>
                            <div className={"userInfo_data"}>Город
                                : {user.address && user.address.city ? user.address.city : "Не указан"}</div>
                            <div className={"userInfo_data"}>Улица
                                : {user.address && user.address.street ? user.address.street : "Не указана"}</div>
                        </div>
                    </div>


                    <div className={"userInfo_data"}>
                        Прошлые заказы :
                        {user.orders && user.orders.map((order: OrderModel) => <div>
                            <>Способ доставки : {order.delivery}</>
                            <>Оплата : {order.payment} </>
                            <>Статус : {order.status ? "Доставлен" : "Выполняется"} </>
                        </div>)

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPageAdmin;
