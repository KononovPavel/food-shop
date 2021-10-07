import React, {useState} from 'react';

import './login.scss'
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
            <div className={"login"}>

                <div className={"login_title"}>
                    Вход
                </div>
                <label aria-required className={"label_login"}>Email</label>
                <Input className={"login-input"} value={email} onChange={e => setEmail(e.currentTarget.value)}
                       placeholder={"Введите email"}/>

                <label aria-required className={"label_login"}>Password</label>
                <Input.Password className={"login-input"} value={password}
                                onChange={e => setPassword(e.currentTarget.value)}
                                placeholder={"Введите пароль"}/>

                <div className={"login_forgot"}>
                    Нет аккаунта? <span onClick={() => history.push("/registration")}
                                        className={"login-singUP"}>Зарегистрироваться</span>
                </div>
                <Button
                    onClick={() => login()}
                    type={"primary"}
                    className={"login-btn"}
                    disabled={!email || !password}
                >
                    Войти
                </Button>
            </div>
        </div>
    );
};

export default Login;
