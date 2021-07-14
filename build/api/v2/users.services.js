"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var users_schema_1 = __importDefault(require("../schema/users.schema"));
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.createUser = function (user_params, callback) {
        var _session = new users_schema_1.default(user_params);
        _session.save(callback);
    };
    UserService.prototype.filterUser = function (query, callback) {
        users_schema_1.default.findOne(query, callback);
    };
    UserService.prototype.updateUser = function (user_params, callback) {
        var query = { _id: user_params._id };
        users_schema_1.default.findOneAndUpdate(query, user_params, callback);
    };
    UserService.prototype.deleteUser = function (_id, callback) {
        var query = { _id: _id };
        users_schema_1.default.deleteOne(query, callback);
    };
    return UserService;
}());
exports.default = UserService;
//# sourceMappingURL=users.services.js.map