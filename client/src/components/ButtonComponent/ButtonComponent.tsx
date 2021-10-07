import React from 'react';
import {Button} from "antd";

type PropsType = {
    title: string,
    type: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined,
    onClick: () => void,
    disable?: boolean
}

const ButtonComponent: React.FC<PropsType> = ({type, title, onClick, disable}) => {
    return (
        <Button type={type} disabled={disable} onClick={() => onClick()}>{title}</Button>
    );
};

export default ButtonComponent;
