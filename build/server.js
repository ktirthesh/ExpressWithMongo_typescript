"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var environment_1 = __importDefault(require("./environment"));
var port = environment_1.default.getPort();
app_1.default.listen(port, function () {
    console.log("App Started on " + port);
});
//# sourceMappingURL=server.js.map