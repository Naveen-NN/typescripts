import { IUser } from './IUser';
import { IUserService } from './IUserService';
import { USERS_DATA } from './UsersMockData'
export class MockUserService implements IUserService {
    users: IUser[];

    constructor() {
        this.users = USERS_DATA.slice(0);
    }

    getUsers(): IUser[] {
        return this.users;
    }

    saveUser(user: IUser): boolean {
        let result: boolean = false;
        if (user) {
            this.users.push(user);
            result = true;
        }

        return result;
    }


}