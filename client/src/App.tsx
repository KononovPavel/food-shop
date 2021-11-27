import React, {useEffect} from 'react';
import './App.scss';
import Login_registr_main_router from "./routes/login_registr_main_router";
import 'antd/dist/antd.css'
import {useDispatch} from "react-redux";
import {auth} from "./redux/actions/AuthAction";
import {useHistory} from "react-router-dom";



function App() {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(auth())
        if(!localStorage.getItem("token")){
            history.push('/login');
        }

    }, [dispatch])

    return (
            <Login_registr_main_router/>
    )

}

export default App;
