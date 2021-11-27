import React from 'react';
import './productList.scss'
import BackNavLink from "../backNavLink/backNavLink";
const ProductList = () => {

    return (
        <div className={"productList"}>
            <BackNavLink linkURL={'/category'}/>
            <div className={"products"}>

            </div>
        </div>
    );
};

export default ProductList;
