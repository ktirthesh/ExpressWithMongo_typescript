"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Environments;
(function (Environments) {
    Environments["local_environment"] = "local";
    Environments["dev_environment"] = "dev";
    Environments["prod_environment"] = "prod";
    Environments["qa_environment"] = "qa";
})(Environments || (Environments = {}));
var Environment = /** @class */ (function () {
    function Environment(environment) {
        this.environment = environment;
    }
    Environment.prototype.getPort = function () {
        if (this.environment === Environments.prod_environment) {
            return 8081;
        }
        else if (this.environment === Environments.dev_environment) {
            return 8082;
        }
        else if (this.environment === Environments.qa_environment) {
            return 8083;
        }
        else {
            return 3001;
        }
    };
    Environment.prototype.getDBName = function () {
        if (this.environment === Environments.prod_environment) {
            return "db_test_project_prod";
        }
        else if (this.environment === Environments.dev_environment) {
            return "db_test_project_dev";
        }
        else if (this.environment === Environments.qa_environment) {
            return "db_test_project_qa";
        }
        else {
            return "db_test_project_local";
        }
    };
    return Environment;
}());
exports.default = new Environment(Environments.local_environment);
//# sourceMappingURL=environment.js.map