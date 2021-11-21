import React from 'react';
import {Button} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import { NavLink } from 'react-router-dom';

type PropsType = {
    linkURL?:string
}
const BackNavLink:React.FC<PropsType> = ({linkURL}) => {
    const buttonStyle =  {
        width:"100px",
        height:"50px"
    }
    return (
            <NavLink to={linkURL? linkURL : '/administration'}>
            <Button style={buttonStyle}  type="primary" icon={<LogoutOutlined />}  />
            </NavLink>
    );
};

export default BackNavLink;
