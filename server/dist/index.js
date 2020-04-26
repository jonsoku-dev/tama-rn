"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var helmet_1 = __importDefault(require("helmet"));
var hpp_1 = __importDefault(require("hpp"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var xss_clean_1 = __importDefault(require("xss-clean"));
var config_1 = __importDefault(require("./config"));
var routes_1 = __importDefault(require("./routes"));
require("./services/passport");
var connectDB_1 = __importDefault(require("./utils/connectDB"));
var errorResponse_1 = __importDefault(require("./utils/errorResponse"));
var app = express_1.default();
var limiter = express_rate_limit_1.default({
    windowMs: 10 * 60 * 1000,
    max: 100000,
});
var corsOption = { origin: 'http://localhost:3000' };
// 미들웨어
app.use(helmet_1.default(), xss_clean_1.default(), cors_1.default(corsOption), body_parser_1.default.urlencoded({ extended: true }), body_parser_1.default.json(), morgan_1.default('dev'), express_mongo_sanitize_1.default(), limiter, hpp_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(routes_1.default);
app.use(errorResponse_1.default);
app.listen(config_1.default.PORT, function () {
    connectDB_1.default();
    console.log("> SERVER : " + config_1.default.PORT + "\uBC88 \uD3EC\uD2B8\uB85C \uC5F0\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4. ");
});
//# sourceMappingURL=index.js.map