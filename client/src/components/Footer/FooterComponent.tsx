import React from 'react';
import {Footer} from "antd/lib/layout/layout";

/**
 * Эта штука просто будет везде, чтобы развлекать посетителей приложения
 * @constructor
 */
const FooterComponent = () => {
    return (
        <div>
            <Footer style={{ textAlign: 'center' , height:"70px"}}>Made in Belarus ©2021 Created by Kononov Pavel</Footer>
        </div>
    );
};

export default FooterComponent;
