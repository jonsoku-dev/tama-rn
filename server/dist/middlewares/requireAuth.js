"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
exports.requireAuth = passport_1.default.authenticate('jwt', { session: false });
//# sourceMappingURL=requireAuth.js.map