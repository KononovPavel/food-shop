import React, {useState} from 'react';
import {Button, Input} from "antd";


const Registration = () => {
    const [lastName, setLastName] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const onClickHandler = () => {

    }
    return (
        <div>
            <form>
                <label>Имя</label>
                <Input/>
                <label>Фамилия</label>
                <Input/>
                <label>email</label>
                <Input/>
                <label>Пароль</label>
                <Input/>
                <Button type={"primary"}>Зарегистрироваться</Button>
            </form>
        </div>
    );
};

export default Registration;
