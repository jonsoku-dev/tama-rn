"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var study_1 = require("./study");
var user_route_1 = __importDefault(require("./user.route"));
var router = express_1.default.Router();
router.use('/user', user_route_1.default);
router.use('/study', study_1.studyRouters);
router.use('/studycategory', study_1.studyCategoryRouters);
exports.default = router;
//# sourceMappingURL=index.js.map