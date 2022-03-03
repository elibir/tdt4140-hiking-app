import { observable, action, makeObservable } from 'mobx'

class UserStore {
    
    @observable user = ""

    constructor() {
        makeObservable(this)
    }
    
    @action updateUser(newUser: string){
        this.user = newUser;
    }
}

const userStore = new UserStore()
export default userStore;