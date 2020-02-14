import { IUser } from './IUser'

export class User implements IUser {
    firstName: string;    
    lastName: string;
    dob: string;
    age: number;
}