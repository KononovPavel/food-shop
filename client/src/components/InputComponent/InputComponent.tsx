import React, {ChangeEvent} from 'react';
import {Input} from "antd";

type PropsType = {
    placeholder: string,
    onChange: (value: string) => void,
    type:string
    password?:boolean,
    value:string,
    disable?:boolean,
    checked?: boolean
}
const InputComponent:React.FC<PropsType> = ({type,placeholder,onChange,password, value, disable, checked}) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        onChange(e.currentTarget.value)
    }
    return (

        <div>
            {
                password
                    ? <Input.Password disabled={disable} value={value} placeholder={placeholder} type={type} onChange={onChangeHandler}/>
                    : <Input disabled={disable} value={value} type={type} placeholder={placeholder} onChange={onChangeHandler}/>
            }

        </div>
    );
};

export default InputComponent;
