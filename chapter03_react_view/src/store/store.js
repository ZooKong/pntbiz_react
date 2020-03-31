import { observable } from 'mobx'

export default observable ({
    loggedIn  : false,
    setLoggedIn (isLoggedIn) {
        this.isLoggedIn = isLoggedIn;
    }
});