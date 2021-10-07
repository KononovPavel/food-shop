import React, {useState} from 'react';
/**
 * Компонента, отвечающая за логин, с перенаправлением на регистрацию
 * password, email - useState()
 */
import '../../styles/form-style.scss'
import {Button, Input} from "antd";
import {useHistory} from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    const history = useHistory();
    const login = () => {
        const userData = {
            email,
            password
        }
        console.log(userData)
    }

    return (

        <div className={'form-container'}>
            <div className={"form"}>

                <div className={"form__title"}>
                    Вход
                </div>
                <label aria-required className={"form__label"}>Email</label>
                <Input className={"form__input"} value={email} onChange={e => setEmail(e.currentTarget.value)}
                       placeholder={"Введите email"}/>

                <label aria-required className={"form__label"}>Password</label>
                <Input.Password className={"form__input"} value={password}
                                onChange={e => setPassword(e.currentTarget.value)}
                                placeholder={"Введите пароль"}/>

                <div className={"form__forgot"}>
                    Нет аккаунта? <span onClick={() => history.push("/registration")}
                                        className={"form__singUP"}>Зарегистрироваться</span>
                </div>
                <div className={"form__btn"}>
                    <Button
                        onClick={() => login()}
                        type={"primary"}
                        disabled={!email || !password}>Войти</Button>
                </div>

            </div>
        </div>
    );
};

export default Login;
