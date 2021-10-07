import React from 'react';
import {Route} from "react-router-dom";
import Content from "../components/content/Content";
import Profile from "../pages/profile/Profile";

const ContentRouter = () => {
    return (
        <div>
            <Route exact={true} path={'/main'} render={()=><Content/>}/>
            <Route exact={true} path={'/profile'} render={()=><Profile/>}/>

        </div>
    );
};

export default ContentRouter;
