"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var study_1 = require("../../../models/v1/study");
var asyncHandler_1 = __importDefault(require("../../../utils/asyncHandler"));
//  Public
//  GET
//  v1/study/:studyId/comment
exports.getComments = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var comments;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, study_1.StudyComment.find()];
            case 1:
                comments = _a.sent();
                res.status(200).json(comments);
                return [2 /*return*/];
        }
    });
}); });
//  Private
//  POST
//  v1/study/:studyId/comment
exports.createComment = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newComment, study;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, study_1.StudyComment.create(__assign(__assign({}, req.body), { user: req.user._id }))];
            case 1:
                newComment = _a.sent();
                return [4 /*yield*/, study_1.Study.findById({ _id: req.params.studyId })];
            case 2:
                study = _a.sent();
                if (!study)
                    return [2 /*return*/, next('스터디가 존재하지않습니다. ')];
                study.comments.push(newComment._id);
                return [4 /*yield*/, study.save()];
            case 3:
                _a.sent();
                res.status(200).json(newComment);
                return [2 /*return*/];
        }
    });
}); });
//  Private
//  PUT
//  v1/study/:studyId/comment/:commentId
exports.updateComment = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedComment;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, study_1.StudyComment.findByIdAndUpdate({ _id: req.params.commentId }, __assign({}, req.body), { new: true, runValidators: false })];
            case 1:
                updatedComment = _a.sent();
                if (!updatedComment)
                    return [2 /*return*/, next('해당 코멘트는 존재하지 않습니다. ')];
                res.status(200).json(updatedComment);
                return [2 /*return*/];
        }
    });
}); });
//  Private
//  DELETE
//  v1/study/:studyId/comment/:commentId
exports.deleteComment = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var comment;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, study_1.StudyComment.findById({ _id: req.params.commentId })];
            case 1:
                comment = _a.sent();
                if (!comment)
                    return [2 /*return*/, next('코멘트가 존재하지 않습니다. ')];
                if (comment.user.toString() !== req.user._id.toString())
                    return [2 /*return*/, next(new Error('해당 권한이 없습니다.'))];
                // cascade
                return [4 /*yield*/, study_1.Study.updateOne({ _id: req.params.studyId }, { $pull: { comments: comment._id } })];
            case 2:
                // cascade
                _a.sent();
                return [4 /*yield*/, comment.remove()];
            case 3:
                _a.sent();
                res.status(200).json(comment);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=studyComment.controller.js.map