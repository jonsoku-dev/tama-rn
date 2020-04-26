"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== 'product') {
    dotenv_1.default.config({ path: '../.env' });
}
exports.default = {
    PORT: process.env.NODE_PORT || 5000,
    MONGO_URL: process.env.MONGO_URI || '',
    JWT_SECRET: process.env.NODE_JWT_SECRET || '',
};
//# sourceMappingURL=config.js.map