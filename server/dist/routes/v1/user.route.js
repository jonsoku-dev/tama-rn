"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_1 = require("../../controllers/v1/user.controller");
var requireAuth_1 = require("../../middlewares/requireAuth");
var router = express_1.default.Router();
router.post('/register', user_controller_1.register);
router.post('/login', user_controller_1.login);
router.get('/me', requireAuth_1.requireAuth, user_controller_1.me);
router.put('/updateprofile', requireAuth_1.requireAuth, user_controller_1.updateProfile);
exports.default = router;
//# sourceMappingURL=user.route.js.map