import React from 'react';
import {Button} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import { NavLink } from 'react-router-dom';

const BackNavLink = () => {
    const buttonStyle =  {
        width:"100px",
        height:"50px"
    }
    return (
            <NavLink to={'/administration'}>
            <Button style={buttonStyle}  type="primary" icon={<LogoutOutlined />}  />
            </NavLink>
    );
};

export default BackNavLink;
