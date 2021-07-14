"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserService_1 = __importDefault(require("../services/UserService"));
var service_1 = require("../../modules/service");
var users_services_1 = __importDefault(require("../services/users.services"));
var UserController = /** @class */ (function () {
    function UserController() {
        this.user_service = new users_services_1.default();
    }
    UserController.getUserProfileData = function (req, res, next) {
        try {
            var data = UserService_1.default.userProfileData();
            res.send(data).status(200);
        }
        catch (e) {
            throw e;
        }
    };
    UserController.prototype.create_user = function (req, res) {
        // this check whether all the filds were send through the erquest or not
        if (req.body.name &&
            req.body.name.first_name &&
            req.body.name.middle_name &&
            req.body.name.last_name &&
            req.body.email &&
            req.body.phone_number &&
            req.body.gender) {
            var user_params = {
                name: {
                    first_name: req.body.name.first_name,
                    middle_name: req.body.name.middle_name,
                    last_name: req.body.name.last_name,
                },
                email: req.body.email,
                phone_number: req.body.phone_number,
                gender: req.body.gender,
                modification_notes: [
                    {
                        modified_on: new Date(Date.now()),
                        modified_by: "",
                        modification_note: "New user created",
                    },
                ],
            };
            this.user_service.createUser(user_params, function (err, user_data) {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse("create user successfull", user_data, res);
                }
            });
        }
        else {
            // error response if some fields are missing in request body
            service_1.insufficientParameters(res);
        }
    };
    UserController.prototype.get_user = function (req, res) {
        if (req.params.id) {
            var user_filter = { _id: req.params.id };
            this.user_service.filterUser(user_filter, function (err, user_data) {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse("get user successfull", user_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    };
    UserController.prototype.update_user = function (req, res) {
        var _this = this;
        if ((req.params.id && req.body.name) ||
            req.body.name.first_name ||
            req.body.name.middle_name ||
            req.body.name.last_name ||
            req.body.email ||
            req.body.phone_number ||
            req.body.gender) {
            var user_filter = { _id: req.params.id };
            this.user_service.filterUser(user_filter, function (err, user_data) {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else if (user_data) {
                    user_data.modification_notes.push({
                        modified_on: new Date(Date.now()),
                        modified_by: "",
                        modification_note: "User data updated",
                    });
                    var user_params = {
                        _id: req.params.id,
                        name: req.body.name
                            ? {
                                first_name: req.body.name.first_name
                                    ? req.body.name.first_name
                                    : user_data.name.first_name,
                                middle_name: req.body.name.first_name
                                    ? req.body.name.middle_name
                                    : user_data.name.middle_name,
                                last_name: req.body.name.first_name
                                    ? req.body.name.last_name
                                    : user_data.name.last_name,
                            }
                            : user_data.name,
                        email: req.body.email ? req.body.email : user_data.email,
                        phone_number: req.body.phone_number
                            ? req.body.phone_number
                            : user_data.phone_number,
                        gender: req.body.gender ? req.body.gender : user_data.gender,
                        is_deleted: req.body.is_deleted
                            ? req.body.is_deleted
                            : user_data.is_deleted,
                        modification_notes: user_data.modification_notes,
                    };
                    _this.user_service.updateUser(user_params, function (err) {
                        if (err) {
                            service_1.mongoError(err, res);
                        }
                        else {
                            service_1.successResponse("update user successfull", null, res);
                        }
                    });
                }
                else {
                    service_1.failureResponse("invalid user", null, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    };
    UserController.prototype.delete_user = function (req, res) {
        if (req.params.id) {
            this.user_service.deleteUser(req.params.id, function (err, delete_details) {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else if (delete_details.deletedCount !== 0) {
                    service_1.successResponse("delete user successfull", null, res);
                }
                else {
                    service_1.failureResponse("invalid user", null, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    };
    return UserController;
}());
exports.default = UserController;
//# sourceMappingURL=UserControllers.js.map