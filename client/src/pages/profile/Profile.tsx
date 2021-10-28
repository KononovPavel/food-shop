import React, {useEffect, useState} from 'react';
import {UserModel} from "../../redux/models/userModel";
import './profile.scss'
import {Button, Input} from "antd";
import Preloader from "../../components/preloader/Preloader";
import OrderItem from "../../components/ordersList/orderItem/OrderItem";
import {OrderModel} from "../../redux/models/orderModel";

/**
 * Будет отображаться информация  о пользователе, так же сделаю последние 5 заказов
 * в будущем будет реализовано добавление фотографии пользователю, а так же общение с администратором
 * в реал тайме
 *
 * @constructor
 */

const user: UserModel = {
    firstName: "Pavel",
    lastName: "Kononov",
    role: "User",
    email: "test@test.com",
    ban: {
        reason: "",
        status: false
    },
    address: {
        city: "Minsk",
        country: "Belarus",
        street: "Odincova",
    },
}

const order: OrderModel = {
    date: "10.10.2021",
    cost: 200,
    status: "Выполнен",
    delivery: "Самовывоз",
    owner: user,
    payment: "Безналичный",
    products: []
}
const ordersFromServer: OrderModel[] = [
    order,
    {...order, date: '20.10.2021'},
]

const Profile = () => {
    const [userModel, setUser] = useState<UserModel>({} as UserModel)
    const [orders, setOrders] = useState<OrderModel[]>([])
    const [active, setActive] = useState<boolean>(false)
    useEffect(() => {
        setTimeout(() => {
            setUser(user);
            setOrders(ordersFromServer)
        }, 2000);
    }, [])
    return (
        <div className={"profile"}>
            <div className={"profile-left"}>
                <div className={"profile-imageBlock"}>
                    <div className={"profile-image"}/>
                </div>
                {
                    Object.keys(userModel).length ?
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
                                <Input className={"profile-input"} onChange={e => setUser({
                                    ...userModel,
                                    address: {...userModel.address, city: e.currentTarget.value}
                                })} value={userModel.address.city}/>
                            </div>


                            <div className={"profile-input-label"}>
                                <label className={"profile-label"}>Улица</label>
                                <Input className={"profile-input"} onChange={e => setUser({
                                    ...userModel,
                                    address: {...userModel.address, street: e.currentTarget.value}
                                })} value={userModel.address.street}/>
                            </div>


                            <div className={"profile-input-label"}>
                                <label className={"profile-label"}>Страна</label>
                                <Input className={"profile-input"} onChange={e => setUser({
                                    ...userModel,
                                    address: {...userModel.address, country: e.currentTarget.value}
                                })} value={userModel.address.country}/>
                            </div>
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
                        : <Preloader/>
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
