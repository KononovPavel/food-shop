import React from 'react';
import './productItem.scss'
import {ProductModel} from "../../../redux/models/productModel";
import {Card} from "antd";
import './productItem.scss'
type PropsType = {
    product:ProductModel
}
const ProductItem:React.FC<PropsType> = (props) => {
    const { Meta } = Card;
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src={props.product.image}
                />
            }
            className={"productItem"}
        >
            <Meta
                title={props.product.name}
                description={props.product.description}
            />
        </Card>
    );
};

export default ProductItem;
