"use strict";
exports.__esModule = true;
var UsersMockData_1 = require("./UsersMockData");
var MockUserService = /** @class */ (function () {
    function MockUserService() {
        this.users = UsersMockData_1.USERS_DATA.slice(0);
    }
    MockUserService.prototype.getUsers = function () {
        return this.users;
    };
    MockUserService.prototype.saveUser = function (user) {
        var result = false;
        if (user) {
            this.users.push(user);
            result = true;
        }
        return result;
    };
    return MockUserService;
}());
exports.MockUserService = MockUserService;
