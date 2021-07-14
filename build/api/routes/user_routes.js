"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserControllers_1 = __importDefault(require("../controllers/UserControllers"));
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.user_controller = new UserControllers_1.default();
    }
    UserRoutes.prototype.route = function (app) {
        var _this = this;
        app.post("/user", function (req, res) {
            _this.user_controller.create_user(req, res);
        });
        app.get("/user/:id", function (req, res) {
            _this.user_controller.get_user(req, res);
        });
        app.put("/user/:id", function (req, res) {
            _this.user_controller.update_user(req, res);
        });
        app.delete("/user/:id", function (req, res) {
            _this.user_controller.delete_user(req, res);
        });
    };
    return UserRoutes;
}());
exports.default = UserRoutes;
//# sourceMappingURL=user_routes.js.map