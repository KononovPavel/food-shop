import React, {useEffect} from 'react';
import './App.scss';
import Login_registr_main_router from "./routes/login_registr_main_router";
import 'antd/dist/antd.css'
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./redux/actions/AuthAction";
import {AppStateType} from "./redux/state";


function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    useEffect(() => {
        dispatch(auth())
    }, [])
    return (
        <Login_registr_main_router/>
    );
}

export default App;
