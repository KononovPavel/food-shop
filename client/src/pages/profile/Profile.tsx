import React, {useEffect, useState} from 'react';
import {UserModel} from "../../redux/models/userModel";
import './profile.scss'
import {Button, Input} from "antd";
import Preloader from "../../components/preloader/Preloader";
import OrderItem from "../../components/ordersList/orderItem/OrderItem";
import {OrderModel} from "../../redux/models/orderModel";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/state";

/**
 * Будет отображаться информация  о пользователе, так же сделаю последние 5 заказов
 * в будущем будет реализовано добавление фотографии пользователю, а так же общение с администратором
 * в реал тайме
 *
 * @constructor
 */





const Profile = () => {
    const user = useSelector<AppStateType, UserModel>(state => state.auth.user)
    const [userModel, setUser] = useState<UserModel>(user)
    const [orders, setOrders] = useState<OrderModel[]>([])
    const [active, setActive] = useState<boolean>(false)
    useEffect(() => {
        if(user !== userModel) {
            setUser(user)
        }
        console.log(user)
    }, [])

    return (
        <div className={"profile"}>
            <div className={"profile-left"}>
                <div className={"profile-imageBlock"}>
                    <div className={"profile-image"}/>
                </div>
                {      Object.keys(userModel).length ?
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
                                <Input className={"profile-input"}  value={userModel.address.city.length ? userModel.address.city : ""} placeholder={"Город"}/>
                            </div>
                            {/*
                            onChange={e => setUser({
                                    ...userModel,
                                    address: {...userModel.address, city: e.currentTarget.value}
                                })}*/}

                            <div className={"profile-input-label"}>
                                <label className={"profile-label"}>Улица</label>
                                <Input className={"profile-input"}  value={userModel.address.street.length? userModel.address.street : ""} placeholder={"Улица"}/>
                            </div>
                            {/*onChange={e => setUser({
                                    ...userModel,
                                    address: {...userModel.address, street: e.currentTarget.value}
                                })}*/}

                            <div className={"profile-input-label"}>
                                <label className={"profile-label"}>Страна</label>
                                <Input className={"profile-input"} value={userModel.address.country.length? userModel.address.country : ""} placeholder={"Страна"}/>
                            </div>

                            {/*onChange={e => setUser({
                                    ...userModel,
                                    address: {...userModel.address, country: e.currentTarget.value}
                                })}*/}
                            <div className={"profile-btn"}>
                                {active
                                    ? <Button onClick={() => {
                                        console.log(userModel);
                                        setActive(!active)
                                    }} type={"primary"}>Изменить</Button>
                                    : <Button onClick={() => setActive(!active)}
                                              type={"primary"}>Редактировать</Button>
                                }
                            </div>

                        </div>
                    :<Preloader/>
                }
            </div>
            <div className={"profile-right"}>
                {orders.length
                    ? <><p>Прошлые заказы</p>
                        <div className={"profile-orders"}>
                            {
                                orders.map(order => <OrderItem key={order.date} order={order}/>)
                            }
                        </div>
                    </>
                    : <Preloader/>}

            </div>
        </div>
    );
};

export default Profile;
