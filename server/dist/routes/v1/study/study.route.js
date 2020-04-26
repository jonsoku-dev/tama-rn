"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var studyComment_route_1 = __importDefault(require("./studyComment.route"));
var studyTodo_route_1 = __importDefault(require("./studyTodo.route"));
var requireAuth_1 = require("../../../middlewares/requireAuth");
var study_controller_1 = require("../../../controllers/v1/study/study.controller");
var router = express_1.default.Router();
router.use('/:studyId/comment', studyComment_route_1.default);
router.use('/:studyId/todo', studyTodo_route_1.default);
router.get('/', study_controller_1.getStudies);
router.post('/', requireAuth_1.requireAuth, study_controller_1.createStudy);
router.get('/:studyId', study_controller_1.getStudy);
router.put('/:studyId', requireAuth_1.requireAuth, study_controller_1.updateStudy);
router.delete('/:studyId', requireAuth_1.requireAuth, study_controller_1.deleteStudy);
router.put('/:studyId/like', requireAuth_1.requireAuth, study_controller_1.like);
router.put('/:studyId/unlike', requireAuth_1.requireAuth, study_controller_1.unlike);
router.put('/:studyId/join', requireAuth_1.requireAuth, study_controller_1.joinStudy);
router.put('/:studyId/quit', requireAuth_1.requireAuth, study_controller_1.quitStudy);
exports.default = router;
//# sourceMappingURL=study.route.js.map