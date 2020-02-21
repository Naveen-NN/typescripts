import { IUser } from "./IUser";
import { USERS } from "./users";

let users: IUser[] = USERS

users.forEach(user => {
   console.log(JSON.stringify(user)); 
});