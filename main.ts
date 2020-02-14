import  { IUser} from './IUser';  
import { IUserService } from './IUserService';  
import { MockUserService } from './MockUserService';  
import { User } from './User';


let userService: IUserService = new MockUserService();  

let users: IUser[] = userService.getUsers();  

users.forEach(user => { 
    console.log(JSON.stringify(user));
})

let user: User = new User();  
user.firstName = "Thanos"; 
user.lastName = "Marvel";  
user.age = 36;  
user.dob = "01/01/1983";  

var result  =  userService.saveUser(user);  

if(result){ 
    users = userService.getUsers();  

    users.forEach(user => { 
        console.log(JSON.stringify(user));
    })
}


