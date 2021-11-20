import React, {useEffect} from 'react';
import './App.scss';
import Login_registr_main_router from "./routes/login_registr_main_router";
import 'antd/dist/antd.css'
import {useDispatch} from "react-redux";
import {auth} from "./redux/actions/AuthAction";
import {getCategories, getProducts} from "./redux/reducers/shopReducer";


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(auth())
        dispatch(getProducts())
        dispatch(getCategories())

    }, [])
    return (
        <Login_registr_main_router/>
    );
}

export default App;
