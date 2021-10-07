import React from 'react';
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import "../main/main.scss"
import ContentRouter from "../../routes/contentRouter";
const Main = () => {
    return (
        <div className={"main"}>
            <HeaderComponent/>
            <ContentRouter/>
            <FooterComponent/>
        </div>
    );
};

export default Main;
