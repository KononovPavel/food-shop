import React from 'react';
import {Route, Switch} from "react-router-dom";
import Profile from "../pages/profile/Profile";
import CategoryList from "../components/CategoryList/CategoryList";
import ProductList from "../components/productList/ProductList";
import Administration from "../pages/administration/administration";
import UserListAdmin from "../pages/administration/userListAdmin/userListAdmin";
import ProductListAdmin from "../pages/administration/productListAdmin/productListAdmin";
import CategoryListAdmin from "../pages/administration/categoryListAdmin/categoryListAdmin";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/state";
import UserPageAdmin from "../pages/administration/userListAdmin/UserPageAdmin/userPageAdmin";

const ContentRouter = () => {
    const role = useSelector<AppStateType, string>(state => state.auth.user.role)

    return (
        <Switch>
            <Route path={'/main'} render={() => <ProductList/>}/>
            <Route path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/category'} render={() => <CategoryList/>}/>

            {
                role === "ADMIN"
                    ? <>

                        <Route exact={true} path={'/administration/userList'} render={() => <UserListAdmin/>}/>
                        <Route exact={true} path={'/administration/userList/:USERID'} render={() => <UserPageAdmin/>}/>
                        <Route exact={true} path={'/administration/productList'} render={() => <ProductListAdmin/>}/>
                        <Route exact={true} path={'/administration/categoryList'} render={() => <CategoryListAdmin/>}/>
                        <Route exact={true} path={'/administration'} render={() => <Administration/>}/>
                    </> : ""
            }


        </Switch>
    );
};

export default ContentRouter;
