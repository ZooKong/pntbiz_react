import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useObserver} from "mobx-react/dist/mobx-react"
import LoginStore from '../store/LoginStore';


export default function AuthRoute({component : Component , ...rest}) {
    return(
        useObserver(() => (
            <Route {...rest} exact={true} render={(props) => {
                return LoginStore.loggedIn ? <Component /> : <Redirect to={'/login'}/>
            }}/>
        ))
    );
}
