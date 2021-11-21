import React, {useState} from 'react';
import {Button, Input} from "antd";
import '../../styles/form-style.scss'
import {useHistory} from "react-router-dom";
import {registrationForm} from "../../types/formData";
import axios from "axios";
import {AuthURL} from "../../URLS/URL";
import {openNotificationWithIcon} from "../../components/Notification/Notification";

/**
 * Компонента, отвечающая за регистрацию пользователя
 * email, password, lastName,firstName - useState()
 * @constructor
 */
const Registration = () => {
    const [lastName, setLastName] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const history = useHistory();
    const onClickHandler = async () => {
        const user: registrationForm = {
            lastName,
            email,
            password,
            firstName
        }
        await axios.post(`${AuthURL}/registration`, user).then(
            () => {
                openNotificationWithIcon("success", "Успех", "Поздравляем с успешной регистрацией")
                history.push('/login')
            }
        )
            .catch(
                () => {
                    openNotificationWithIcon("error", "Упс", "Ошибочка.....")
                }
            )

    }
    return (
        <div className={"form-container"}>
            <form className={"form"}>
                <div className={"form__title"}>
                    Регистрация
                </div>
                <label className={"form__label"}>Имя</label>
                <Input value={firstName} onChange={e => setFirstName(e.currentTarget.value)}
                       placeholder={"Введите ваше имя"} className={"form__input"}/>
                <label className={"form__label"}>Фамилия</label>
                <Input value={lastName} onChange={e => setLastName(e.currentTarget.value)}
                       placeholder={"Введите вашу фамилию"} className={"form__input"}/>
                <label className={"form__label"}>Email</label>
                <Input value={email} onChange={e => setEmail(e.currentTarget.value)} placeholder={"Введите ваш email"}
                       className={"form__input"}/>
                <label className={"form__label"}>Пароль</label>
                <Input value={password} onChange={e => setPassword(e.currentTarget.value)}
                       placeholder={"Введите ваш пароль"} className={"form__input"}/>
                <div className={"form__forgot"}>
                    Уже есть аккаунт? <span onClick={() => history.push("/login")}
                                            className={"form__singUP"}>Войти</span>
                </div>

                <div className={"form__btn"}>
                    <Button onClick={() => onClickHandler()} disabled={!password || !email}
                            type={"primary"}>Зарегистрироваться</Button>
                </div>

            </form>
        </div>
    );
};

export default Registration;
