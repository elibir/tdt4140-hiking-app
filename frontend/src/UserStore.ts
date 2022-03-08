import { observable, action, makeObservable } from 'mobx'
import { User } from './Interfaces';

class UserStore {
    
    @observable user: User | undefined = JSON.parse(localStorage.getItem("user")!) as User;

    constructor() {
        makeObservable(this)
    }
    
    @action updateUser(newUser: User){
        this.user = newUser;
    }
}

const userStore = new UserStore()
export default userStore;