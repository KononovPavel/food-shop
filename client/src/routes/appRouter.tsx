import React from 'react';
import {Route} from "react-router-dom";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Main from "../pages/main/Main";

const AppRouter = () => {
    return (
        <>
            <Route exact={true} path={'/login'} render={() => <Login/>}/>
            <Route exact={true} path={'/registration'} render={() => <Registration/>}/>
            <Route exact={true} path={"/"} render={()=><Main/>}/>
        </>
    );
};

export default AppRouter;
