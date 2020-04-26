"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var requireAuth_1 = require("../../../middlewares/requireAuth");
var studyCategory_controller_1 = require("../../../controllers/v1/study/studyCategory.controller");
var router = express_1.default.Router();
router.get('/', studyCategory_controller_1.getCategories);
router.post('/', requireAuth_1.requireAuth, studyCategory_controller_1.createCategory);
router.put('/:categoryId', requireAuth_1.requireAuth, studyCategory_controller_1.updateCategory);
router.delete('/:categoryId', requireAuth_1.requireAuth, studyCategory_controller_1.deleteCategory);
exports.default = router;
//# sourceMappingURL=studyCategory.route.js.map