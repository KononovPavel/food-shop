import React from 'react';
import {UserModel} from "../../redux/models/userModel";
import './profile.scss'
import {Button, Input} from "antd";
/**
 * Будет отображаться информация  о пользователе, так же сделаю последние 5 заказов
 * в будущем будет реализовано добавление фотографии пользователю, а так же общение с администратором
 * в реал тайме
 *
 * @constructor
 */

const user : UserModel = {
    firstName:"Pavel",
    lastName:"Kononov",
    role:"User",
    email:"test@test.com",
    ban:{
        reason:"",
        status:false
    },
    address:{
        city:"Minsk",
        country:"Belarus",
        street:"Odincova",
    },
    password:"К сожалению, вы его не увидите",
}

const Profile = () => {

    return (
        <div className={"profile"}>
            <div className={"profile-left"}>
                <div className={"profile-imageBlock"}>
                    <div className={"profile-image"}/>
                </div>
                <div className={"profile-info"}>
                    <div className={"profile-input-label"}>
                        <label className={"profile-label"}>Имя</label>
                        <Input className={"profile-input"} value={user.firstName}/>
                    </div>

                    <div className={"profile-input-label"}>
                        <label className={"profile-label"}>Фамилия</label>
                        <Input className={"profile-input"} value={user.lastName}/>
                    </div>


                    <div className={"profile-input-label"}>
                        <label className={"profile-label"}>Почта</label>
                        <Input className={"profile-input"} value={user.email}/>
                    </div>


                    <div className={"profile-input-label"}>
                        <label className={"profile-label"}>Город</label>
                        <Input className={"profile-input"} value={user.address.city}/>
                    </div>


                    <div className={"profile-input-label"}>
                        <label className={"profile-label"}>Улица</label>
                        <Input className={"profile-input"} value={user.address.street}/>
                    </div>


                    <div className={"profile-input-label"}>
                        <label className={"profile-label"}>Страна</label>
                        <Input className={"profile-input"} value={user.address.country}/>
                    </div>
                    <div className={"profile-btn"}>
                        <Button type={"primary"}>Изменить</Button>
                    </div>

                </div>
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
