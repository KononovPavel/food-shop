import React, {useState} from 'react';
import InputComponent from "../../components/InputComponent/InputComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const Login = () => {
    const [lastName, setLastName] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const onClickHandler = () => {

    }
    return (
        <form>
            <label>Имя</label>
            <InputComponent placeholder={"Введите имя"} onChange={setFirstName} type={"text"} value={firstName}/>

            <label>Фамилия</label>
            <InputComponent placeholder={"Введите фамилию"} onChange={setLastName} type={"text"} value={lastName}/>

            <label>email</label>
            <InputComponent placeholder={"Введите email"} onChange={setEmail} type={"text"} value={email}/>

            <label>Пароль</label>
            <InputComponent placeholder={"Введите пароль"} onChange={setPassword} type={"password"} value={password}/>

            <ButtonComponent title={"Регистрация"} type={"primary"} onClick={onClickHandler} disable={email==='' || password===''}/>
        </form>
    );
};

export default Login;
