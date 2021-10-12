import React from 'react';
import './header.scss'
import icon from '../../assets/food_.jpg'
import { NavLink } from 'react-router-dom';
/**
 * Заголовок для приложения, я решил, что он будет везде, кроме логина и регистрации
 * его данные будут меняться, в зависимости от страницы а так же состояния пользователя
 * @constructor
 */
const HeaderComponent = () => {
    const isAuth = false;
    return (
        <div className={"header"}>
            <div className={"header__link"}>
                <NavLink to={'/main'}> <img src={icon} alt="" width={50} height={50}/> </NavLink>
                <NavLink className={"header__nav"} activeClassName={"header__active"} to={'/product'}>Продукты</NavLink>

            </div>

            <div className={'header__navigation'}>
                {
                    !isAuth && <>
                        <NavLink className={"header__nav"} activeClassName={"header__active"} to={'/login'}>Войти</NavLink>
                        <NavLink className={"header__nav"} activeClassName={"header__active"} to={'/registration'}>Регистрация</NavLink></>
                }
                {
                    isAuth &&  <NavLink className={"header__nav"} activeClassName={"header__active"} to={'/logout'}>Выйти</NavLink>
                }

            </div>
        </div>
    );
};

export default HeaderComponent;
