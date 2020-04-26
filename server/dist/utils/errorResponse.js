"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_errors_1 = __importDefault(require("http-errors"));
exports.default = (function (err, req, res, next) {
    var apiError = err;
    if (!err.status) {
        apiError = http_errors_1.default(err);
    }
    // set locals, only providing error in development
    res.locals.message = apiError.message;
    res.locals.error = apiError;
    // res.locals.error = process.env.NODE_ENV === 'development' ? apiError : {}
    // render the error page
    return res.status(apiError.status).json({
        error: apiError.message,
    });
});
//# sourceMappingURL=errorResponse.js.map