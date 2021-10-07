import React from 'react';
import {Route} from "react-router-dom";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";

const AppRouter = () => {
    return (
        <>
            <Route exact={true} path={'/login'} render={() => <Login/>}/>
            <Route exact={true} path={'/registration'} render={() => <Registration/>}/>
        </>
    );
};

export default AppRouter;
