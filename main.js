"use strict";
exports.__esModule = true;
var MockUserService_1 = require("./MockUserService");
var User_1 = require("./User");
var userService = new MockUserService_1.MockUserService();
var users = userService.getUsers();
users.forEach(function (user) {
    console.log(JSON.stringify(user));
});
var user = new User_1.User();
user.firstName = "Thanos";
user.lastName = "Marvel";
user.age = 36;
user.dob = "01/01/1983";
var result = userService.saveUser(user);
if (result) {
    users = userService.getUsers();
    users.forEach(function (user) {
        console.log(JSON.stringify(user));
    });
}
