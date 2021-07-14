"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var v1_1 = __importDefault(require("../v1"));
// import UserRoutes from "./user_routes"
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.routes = function (app) {
        app.route("/_status").get(function (req, res) {
            res.status(200).send("Healthy!!!");
        });
        app.use("/v1", v1_1.default);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=index.js.map