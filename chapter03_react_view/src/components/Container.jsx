import React from 'react';
import Album from "./Album";
import SignIn from "./SignIn";
import LoginStore from "../store/LoginStore";
import {useObserver} from "mobx-react/dist/mobx-react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthRoute from './AuthRoute';

export default function Container() {

    return(
        useObserver(() => (
            <>
                <Router>
                    <AuthRoute path="/*"/>
                    <Switch>
                        <Route path="/login" exact={true} component={SignIn} />
                        <Route path="/album" exact={true} component={Album} />
                    </Switch>
                </Router>
            </>

        ))
    );

}
