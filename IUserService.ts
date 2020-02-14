import { IUser }  from './IUser';

export interface IUserService{ 
    getUsers(): IUser[];
    saveUser(user: IUser): boolean;
}