import React from 'react';
import Album from "./Album";
import SignIn from "./SignIn";
import {useObserver} from "mobx-react/dist/mobx-react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthRoute from './AuthRoute';

export default function Container() {

    return(
        useObserver(() => (
            <>
                <Router>
                    <Switch>
                        <AuthRoute path="/" exact={true}/>
                        <Route path="/login" exact={true} component={SignIn} />
                        <AuthRoute path="/album" exact={true} component={Album} />
                    </Switch>
                </Router>
            </>
        ))
    );

}
