import React from 'react';
import SignIn from "./SignIn";
import Album from "./Album";
import Store from "../store/store";
import {useObserver} from "mobx-react/dist/mobx-react"

export default function Container() {

    return(
        useObserver(() => (
            <Router>
                <Route path="/login" exact={true} component={Album} />
                <Route path="/SignIn" exact={true} component={SignIn} />
            </Router>
        ))
    );

}