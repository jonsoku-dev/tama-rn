"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var requireAuth_1 = require("../../../middlewares/requireAuth");
var studyComment_controller_1 = require("../../../controllers/v1/study/studyComment.controller");
var router = express_1.default.Router({ mergeParams: true });
router.get('/', studyComment_controller_1.getComments);
router.post('/', requireAuth_1.requireAuth, studyComment_controller_1.createComment);
router.put('/:commentId', requireAuth_1.requireAuth, studyComment_controller_1.updateComment);
router.delete('/:commentId', requireAuth_1.requireAuth, studyComment_controller_1.deleteComment);
exports.default = router;
//# sourceMappingURL=studyComment.route.js.map