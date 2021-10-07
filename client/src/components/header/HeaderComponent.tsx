import React from 'react';
import {Header} from "antd/es/layout/layout";
import {Menu} from "antd";
import { NavLink } from 'react-router-dom';

/**
 * Заголовок для приложения, я решил, что он будет везде, кроме логина и регистрации
 * его данные будут меняться, в зависимости от страницы а так же состояния пользователя
 * @constructor
 */
const HeaderComponent = () => {
    const isAuth = true;
    return (
        <div>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' , marginBottom:'100px'}}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <NavLink exact={true} to={'/main'}><Menu.Item key="1">Главная</Menu.Item></NavLink>
                    <Menu.Item key="2">{isAuth ? "Профиль" : "Войти"}</Menu.Item>
                    <Menu.Item disabled={!isAuth} key="3">Корзина</Menu.Item>
                    <Menu.Item key="4">Мои заказы</Menu.Item>
                </Menu>
            </Header>
        </div>
    );
};

export default HeaderComponent;
