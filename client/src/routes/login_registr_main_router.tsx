import React from 'react';
import {Route} from "react-router-dom";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Main from "../pages/main/Main";

/**
 * Наши роуты для регистрации и главной страницы
 * весь дальнейший кайф будет на главной странице
 * там будет весь контент , в зависимости от ссылок и прочей инфы приходящей с сервера!
 * @constructor
 */
const Login_registr_main_router = () => {
    const isAuth = false
    return (
        <>
            <Route exact={true} path={'/login'} render={() => <Login/>}/>
            <Route exact={true} path={'/registration'} render={() => <Registration/>}/>
            <Route exact={true} path={"/"} render={() => <Main/>}/>
        </>
    );
};

export default Login_registr_main_router;
