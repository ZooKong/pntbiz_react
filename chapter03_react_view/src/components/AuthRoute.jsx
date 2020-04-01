import React, {useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import LoginStore from '../store/LoginStore';


export default function AuthRoute({component : Component , ...rest}) {
    return(
        <Route {...rest} exact={true} render={(props) => {
            return LoginStore.loggedIn ? null : <Redirect to={'/login'}/>
        }}/>
    );

}
