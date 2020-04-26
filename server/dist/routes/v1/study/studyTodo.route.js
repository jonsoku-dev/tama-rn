"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var requireAuth_1 = require("../../../middlewares/requireAuth");
var studyTodo_controller_1 = require("../../../controllers/v1/study/studyTodo.controller");
var router = express_1.default.Router({ mergeParams: true });
router.get('/', studyTodo_controller_1.getTodos);
router.post('/', requireAuth_1.requireAuth, studyTodo_controller_1.createTodo);
router.put('/:todoId', requireAuth_1.requireAuth, studyTodo_controller_1.updateTodo);
router.delete('/:todoId', requireAuth_1.requireAuth, studyTodo_controller_1.deleteTodo);
exports.default = router;
//# sourceMappingURL=studyTodo.route.js.map