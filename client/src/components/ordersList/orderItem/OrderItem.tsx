import React, {useState} from 'react';
import './orderItem.scss'
import {OrderModel} from "../../../redux/models/orderModel";
import {DownSquareOutlined, UpSquareOutlined} from "@ant-design/icons";

type PropsType = {
    order: OrderModel
}
const OrderItem: React.FC<PropsType> = ({order}) => {
    const [active, setActive] = useState<boolean>(false);
    const changeStatus = (value: boolean): void => {
        setActive(value)
    }
    return (
        <div className={"orderItem"}>
            <div className="orderItem_block">
                <div className={"orderItem_getInfo"}>
                    <span>Дата:<strong>{order.date}</strong></span>
                    <div>
                        {
                            !active
                                ? <DownSquareOutlined onClick={() => changeStatus(true)}/>
                                : <UpSquareOutlined onClick={() => changeStatus(false)}/>
                        }
                    </div>
                </div>
                {
                    active && <div className={"orderItem_info"}>
                        <span>Стоимость :&#65284;{order.cost}</span>
                        <span>Способ оплаты : {order.payment}</span>
                        <span>Способ доставки :{order.delivery}</span>
                        <span>Продукты:</span>
                        <div>
                            {
                                order.products.length && order.products.map(product => {
                                    return (
                                        <div key={product._id}>{product.name} : {product.price}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default OrderItem;
