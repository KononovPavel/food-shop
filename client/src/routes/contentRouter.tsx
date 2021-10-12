import React from 'react';
import {Route, Switch} from "react-router-dom";
import Content from "../components/content/Content";
import Profile from "../pages/profile/Profile";
import ProductList from "../components/productList/ProductList";

const ContentRouter = () => {
    return (
        <Switch>
            <Route path={'/main'} render={() => <Content/>}/>
            <Route path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/product'} render={() => <ProductList/>}/>
            <Route path={'/profile'} render={() => <Profile/>}/>
        </Switch>
    );
};

export default ContentRouter;
