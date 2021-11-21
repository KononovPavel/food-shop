import React from 'react';
import './header.scss'
import icon from '../../assets/food_.jpg'
import {NavLink, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/state";
import {logout} from "../../redux/reducers/authReducer";

/**
 * Заголовок для приложения, я решил, что он будет везде, кроме логина и регистрации
 * его данные будут меняться, в зависимости от страницы а так же состояния пользователя
 * @constructor
 */
const HeaderComponent = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const role = useSelector<AppStateType, string>(state => state.auth.user.role)
    const _id = useSelector<AppStateType, string>(state => state.auth.user._id)

    const logoutHandler = () => {
        dispatch(logout())
    }

    const dispatch = useDispatch()
    return (
        <div className={"header"}>
            <div className={"header__link"}>
                <NavLink to={'/main'}> <img src={icon} alt="" width={50} height={50}/> </NavLink>
                {
                    isAuth && <>
                        <NavLink className={"header__nav"} activeClassName={"header__active"}
                                 to={'/category'}>Категории</NavLink>
                        <NavLink className={"header__nav"} activeClassName={"header__active"}
                                 to={'/main'}>Главная</NavLink>
                    </>
                }
                <span style={{marginLeft: "20px"}}> {_id}</span>
            </div>

            <div className={'header__navigation'}>
                {
                    !isAuth && <>
                        <NavLink className={"header__nav"} activeClassName={"header__active"}
                                 to={'/login'}>Войти</NavLink>
                        <NavLink className={"header__nav"} activeClassName={"header__active"}
                                 to={'/registration'}>Регистрация</NavLink>
                    </>
                }
                {
                    isAuth &&
                    <>

                        <NavLink className={"header__nav"} activeClassName={"header__active"}
                                 to={'/profile/' + _id}>Профиль</NavLink>
                        <NavLink className={"header__nav"} activeClassName={"header__active"} to={'/login'}
                                 onClick={() => logoutHandler()}>Выйти</NavLink>
                    </>
                }
                {
                    role === "ADMIN"
                        ? <NavLink className={"header__nav"} activeClassName={"header__active"}
                                   to={'/administration'}>Администрация</NavLink>
                        : ""
                }


            </div>
        </div>
    );
};

export default HeaderComponent;
