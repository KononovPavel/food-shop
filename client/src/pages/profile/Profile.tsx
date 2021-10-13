import React, {useEffect, useState} from 'react';
import {UserModel} from "../../redux/models/userModel";
import './profile.scss'
import {Button, Input} from "antd";
import Preloader from "../../components/preloader/Preloader";

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
    password: "К сожалению, вы его не увидите",
}

const Profile = () => {
    const [userModel, setUser] = useState<UserModel>({} as UserModel)
    const [active, setActive] = useState<boolean>(false)
    useEffect(() => {
        setUser(user);
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
                <p>Прошлые заказы</p>
                <div className={"profile-orders"}>
                </div>
            </div>
        </div>
    );
};

export default Profile;
