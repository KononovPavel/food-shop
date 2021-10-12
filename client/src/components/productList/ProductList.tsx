import React from 'react';
import {ProductModel} from "../../redux/models/productModel";
import ProductItem from "./ProductItem/ProductItem";
import './productList.scss'
const ProductList = () => {
    const products:ProductModel[] = [
        {category:'Горячие блюда', count:20, date:new Date(),description:"Описание", image:" https://st3.depositphotos.com/1749882/15803/i/600/depositphotos_158033752-stock-photo-illustration-of-an-alcoholic-drink.jpg",images:[],name:"Пиво",price:200, _id:"12"},
        {category:'Горячие блюда', count:20, date:new Date(),description:"Описание", image:" https://st3.depositphotos.com/1749882/15803/i/600/depositphotos_158033752-stock-photo-illustration-of-an-alcoholic-drink.jpg",images:[],name:"Пиво",price:200, _id:'13'}
    ]
    return (
        <div className={"productList"}>
            {
                products.map(product => {
                    return (
                        <ProductItem product={product}/>
                    )
                })
            }
        </div>
    );
};

export default ProductList;
