import { observable, action, makeObservable } from 'mobx'
import { User } from './Interfaces';

class UserStore {
    
    
    @observable user: User | null = null;

    constructor() {
        let userString: string | null = localStorage.getItem("user")
        console.log(userString);
        try {
            this.user = userString ? JSON.parse(userString) as User : null;
          }
          catch(err) {
            localStorage.setItem("user", "") ;
            this.user = null;
          }
        
        makeObservable(this)
    }
    
    @action updateUser(newUser: User){
        this.user = newUser;
    }
    @action logOut(){
      this.user = null;
  }
}

const userStore = new UserStore()
export default userStore;