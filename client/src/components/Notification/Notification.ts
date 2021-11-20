import { notification } from 'antd';

type PropsType = "success" | "info" | "warning" | "error"
export const openNotificationWithIcon = (type:PropsType, message:string, description:string) => {
        notification[type]({
            message: message,
            description:description,
        });
    };



