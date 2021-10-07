import React from 'react';
import {Footer} from "antd/lib/layout/layout";

/**
 * Эта штука просто будет везде, чтобы развлекать посетителей приложения
 * @constructor
 */
const FooterComponent = () => {
    return (
        <div>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

        </div>
    );
};

export default FooterComponent;
