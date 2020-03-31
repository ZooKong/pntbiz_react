import React from 'react';
import SignIn from "./SignIn";
import Album from "./Album";
import Store from "../store/store";
import {useObserver} from "mobx-react/dist/mobx-react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Container() {

    return(
        useObserver(() => (
            <Router>
                <Switch>
                    <Route path="/album" exact={true} component={Album} />
                    <Route path="/SignIn" exact={true} component={SignIn} />
                </Switch>
            </Router>
        ))
    );

}