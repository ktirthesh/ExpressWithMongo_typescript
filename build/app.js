"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var environment_1 = __importDefault(require("./environment"));
var index_1 = require("./api/routes/index");
var user_routes_1 = __importDefault(require("./api/routes/user_routes"));
var App = /** @class */ (function () {
    function App() {
        this.routePre = new index_1.Routes();
        this.UserRoutes1 = new user_routes_1.default();
        this.mongoUrl = "mongodb://localhost:27017/" + environment_1.default.getDBName();
        this.app = express_1.default();
        this.config();
        this.routePre.routes(this.app);
        this.UserRoutes1.route(this.app);
        this.mongoSetup();
    }
    App.prototype.config = function () {
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS,PUT");
            res.header("Access-Control-Allow-Headers", "*");
            next();
        });
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    App.prototype.mongoSetup = function () {
        mongoose_1.default.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map