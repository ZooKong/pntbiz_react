import { observable } from 'mobx'

export default observable ({
    loggedIn  : false,
    token : null,
    setLoggedIn(loggedIn) {
        this.loggedIn = loggedIn;
    },
    setToken(token) {
        this.token = token;
    }
});