import React, {useEffect, useState} from 'react';
import {UserModel} from "../../redux/models/userModel";
import './profile.scss'
import {Button, Input, Spin} from "antd";
import Preloader from "../../components/preloader/Preloader";
import OrderItem from "../../components/ordersList/orderItem/OrderItem";
import {OrderModel} from "../../redux/models/orderModel";
import {useDispatch} from "react-redux";
import axios from "axios";
import {ProfileURL, UserURL} from "../../URLS/URL";
import {useParams} from "react-router-dom";
import {openNotificationWithIcon} from "../../components/Notification/Notification";
import {setUserAC} from "../../redux/reducers/authReducer";

/**
 * Будет отображаться информация  о пользователе, так же сделаю последние 5 заказов
 * в будущем будет реализовано добавление фотографии пользователю, а так же общение с администратором
 * в реал тайме
 *
 * @constructor
 */

type params = {
    USERID: string
}
const Profile = () => {
    const {USERID} = useParams<params>();
    const [userModel, setUser] = useState<UserModel>({} as UserModel)
    const [active, setActive] = useState<boolean>(false)
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${UserURL}/${USERID}`).then((res) => {
            console.log(res.data)
            openNotificationWithIcon("success", "Успех", "Пользователь загружен")
            setUser(res.data.user);
        }).catch(() => {
            openNotificationWithIcon("error", "Провал", "Что то пошло не так")
        })
    }, [])

    const changeProfileData = async (userID: string) => {
        setActive(true)
        await axios.post(`${ProfileURL}`, {
            id: userID,
            street: userModel.address.street,
            city:userModel.address.city,
            country:userModel.address.country,
            firstName:userModel.firstName,
            lastName:userModel.lastName,
            email:userModel.email
        }).then(
            (res) => {
                setUser(userModel);
                setActive(false);
                openNotificationWithIcon("success", "Отлично", "Данные были сохранены")
                dispatch(setUserAC(userModel));
            }
        ).catch(
            () => {
                setActive(false);
                openNotificationWithIcon("error", "Упс", "Что то пошло не так, попробуйте проверить введенные данные");
            }
        )
    }

    return (
        <div className={"profile"}>
            <div className={"profile-left"}>
                <div className={"profile-imageBlock"}>
                    <img
                        src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg"
                        alt="" width={100} height={100}/>
                </div>
                {Object.keys(userModel).length ?
                    <div className={"profile-info"}>
                        <div className={"profile-input-label"}>
                            <label className={"profile-label"}>Имя</label>
                            <Input className={"profile-input"}
                                   onChange={e => setUser({...userModel, firstName: e.currentTarget.value})}
                                   value={userModel.firstName}/>
                        </div>

                        <div className={"profile-input-label"}>
                            <label className={"profile-label"}>Фамилия</label>
                            <Input className={"profile-input"}
                                   onChange={e => setUser({...userModel, lastName: e.currentTarget.value})}
                                   value={userModel.lastName}/>
                        </div>


                        <div className={"profile-input-label"}>
                            <label className={"profile-label"}>Почта</label>
                            <Input className={"profile-input"}
                                   onChange={e => setUser({...userModel, email: e.currentTarget.value})}
                                   value={userModel.email}/>
                        </div>


                        <div className={"profile-input-label"}>
                            <label className={"profile-label"}>Город</label>
                            <Input className={"profile-input"}
                                   value={userModel.address && userModel.address.city ? userModel.address.city : ""}
                                   placeholder={"Город"}
                                   onChange={e => setUser({
                                       ...userModel,
                                       address: {...userModel.address, city: e.currentTarget.value}
                                   })}/>
                        </div>

                        <div className={"profile-input-label"}>
                            <label className={"profile-label"}>Улица</label>
                            <Input className={"profile-input"}
                                   value={userModel.address && userModel.address.street ? userModel.address.street : ""}
                                   placeholder={"Улица"}
                                   onChange={e => setUser({
                                       ...userModel,
                                       address: {...userModel.address, street: e.currentTarget.value}
                                   })}/>
                        </div>


                        <div className={"profile-input-label"}>
                            <label className={"profile-label"}>Страна</label>
                            <Input className={"profile-input"}
                                   value={userModel.address && userModel.address.country ? userModel.address.country : ""}
                                   placeholder={"Страна"}
                                   onChange={e => setUser({
                                       ...userModel,
                                       address: {...userModel.address, country: e.currentTarget.value}
                                   })}/>
                        </div>

                        <div className={"profile-btn"}>
                            <Button disabled={active} onClick={() => changeProfileData(USERID)}
                                    type={"dashed"}>Редактировать</Button>
                            {
                                active && <Spin style={{marginLeft: "20px"}}/>
                            }
                        </div>

                    </div>
                    : <Preloader/>
                }
            </div>
            <div className={"profile-right"}>
                {Object.keys(userModel).length
                    ? <><p>Прошлые заказы</p>
                        <div className={"profile-orders"}>
                            {
                                userModel.orders.length
                                    ? userModel.orders.map((order: OrderModel) => <OrderItem order={order}/>)
                                    : <span className={"notHaveOrders"}>Ваших заказов нет</span>
                            }
                        </div>
                    </>
                    : <Preloader/>}

            </div>
        </div>
    );
};

export default Profile;
