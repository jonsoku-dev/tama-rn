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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var study_1 = require("../../../models/v1/study");
var user_model_1 = __importDefault(require("../../../models/v1/user.model"));
var asyncHandler_1 = __importDefault(require("../../../utils/asyncHandler"));
//  Public
//  GET
//  v1/study
exports.getStudies = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var studies;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, study_1.Study.find({}).populate({
                    path: 'category',
                    model: 'StudyCategory',
                    select: 'name',
                })];
            case 1:
                studies = _a.sent();
                res.status(200).json(studies);
                return [2 /*return*/];
        }
    });
}); });
//  Private
//  POST
//  v1/study
exports.createStudy = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newStudy;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, study_1.Study.create(req.body)];
            case 1:
                newStudy = _a.sent();
                res.status(201).json(newStudy);
                return [2 /*return*/];
        }
    });
}); });
//  Public
//  GET
//  v1/study/:studyId
exports.getStudy = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var study;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, study_1.Study.findByIdAndUpdate({ _id: req.params.studyId }, { $inc: { view: 1 } }, { new: true, runValidators: false })
                    .populate({
                    path: 'category',
                    model: 'StudyCategory',
                    select: 'name',
                })
                    .populate({
                    path: 'user',
                    model: 'User',
                    select: 'username',
                })
                    .populate({
                    path: 'participants',
                    model: 'User',
                    select: 'username email avatar',
                })];
            case 1:
                study = _a.sent();
                if (!study)
                    return [2 /*return*/, next('존재하지않는 스터디입니다. ')];
                res.status(200).json(study);
                return [2 /*return*/];
        }
    });
}); });
//  Private
//  PUT
//  v1/study/:studyId
exports.updateStudy = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedStudy;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, study_1.Study.findByIdAndUpdate({ _id: req.params.studyId }, __assign({}, req.body), { new: true, runValidators: false })];
            case 1:
                updatedStudy = _a.sent();
                if (!updatedStudy)
                    return [2 /*return*/, next('존재하지않는 스터디입니다. ')];
                res.status(201).json(updatedStudy);
                return [2 /*return*/];
        }
    });
}); });
//  Private
//  DELETE
//  v1/study/:studyId
exports.deleteStudy = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedStudy;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, study_1.Study.findByIdAndDelete({ _id: req.params.studyId })];
            case 1:
                deletedStudy = _a.sent();
                if (!deletedStudy)
                    return [2 /*return*/, next('존재하지않는 스터디입니다. ')];
                res.status(200).json(deletedStudy);
                return [2 /*return*/];
        }
    });
}); });
//  Private
//  PUT
//  v1/study/:studyId/like
exports.like = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var study, includesUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, study_1.Study.findById({ _id: req.params.studyId })];
            case 1:
                study = _a.sent();
                if (!study)
                    return [2 /*return*/, next('스터디가 존재하지 않습니다. ')];
                includesUser = !!study.likes.find(function (user) { return user.toString() === req.user._id.toString(); });
                if (includesUser)
                    return [2 /*return*/, next('이미 좋아요를 누르셨습니다. ')];
                study.likes = __spreadArrays(study.likes, [req.user._id]);
                return [4 /*yield*/, study_1.Study.findByIdAndUpdate({ _id: req.params.studyId }, { likes: study.likes }, { new: true, runValidators: false })
                        .populate({
                        path: 'category',
                        model: 'StudyCategory',
                        select: 'name',
                    })
                        .populate({
                        path: 'user',
                        model: 'User',
                        select: 'username',
                    })
                        .populate({
                        path: 'participants',
                        model: 'User',
                        select: 'username email avatar',
                    })];
            case 2:
                study = _a.sent();
                res.status(200).json(study);
                return [2 /*return*/];
        }
    });
}); });
//  Private
//  PUT
//  v1/study/:studyId/unlike
exports.unlike = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var study, includesUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, study_1.Study.findById({ _id: req.params.studyId })];
            case 1:
                study = _a.sent();
                if (!study)
                    return [2 /*return*/, next('스터디가 존재하지 않습니다. ')];
                includesUser = !!study.likes.find(function (user) { return user.toString() === req.user._id.toString(); });
                if (!includesUser)
                    return [2 /*return*/, next('좋아요를 누르지 않으셨습니다. ')];
                study.likes = study.likes.filter(function (user) { return user.toString() !== req.user._id.toString(); });
                return [4 /*yield*/, study_1.Study.findByIdAndUpdate({ _id: req.params.studyId }, { likes: study.likes }, { new: true, runValidators: false })
                        .populate({
                        path: 'category',
                        model: 'StudyCategory',
                        select: 'name',
                    })
                        .populate({
                        path: 'user',
                        model: 'User',
                        select: 'username',
                    })
                        .populate({
                        path: 'participants',
                        model: 'User',
                        select: 'username email avatar',
                    })];
            case 2:
                study = _a.sent();
                res.status(200).json(study);
                return [2 /*return*/];
        }
    });
}); });
//  Private
//  PUT
//  v1/study/:studyId/join
exports.joinStudy = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var study, includesUser, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, study_1.Study.findById({ _id: req.params.studyId })];
            case 1:
                study = _a.sent();
                if (!study)
                    return [2 /*return*/, next('스터디가 존재하지 않습니다. ')];
                includesUser = !!study.participants.find(function (user) { return user.toString() === req.user._id.toString(); });
                if (includesUser)
                    return [2 /*return*/, next('이미 참석하셨습니다. ')];
                study.participants = __spreadArrays(study.participants, [req.user._id]);
                return [4 /*yield*/, study_1.Study.findByIdAndUpdate({ _id: req.params.studyId }, { participants: study.participants }, { new: true, runValidators: false })
                        .populate({
                        path: 'category',
                        model: 'StudyCategory',
                        select: 'name',
                    })
                        .populate({
                        path: 'user',
                        model: 'User',
                        select: 'username',
                    })
                        .populate({
                        path: 'participants',
                        model: 'User',
                        select: 'username email avatar',
                    })];
            case 2:
                study = _a.sent();
                return [4 /*yield*/, user_model_1.default.findById({ _id: req.user._id })];
            case 3:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/, next('비정상적인 접근입니다. ')];
                user.joinedStudies = __spreadArrays(user.joinedStudies, [study === null || study === void 0 ? void 0 : study._id]);
                return [4 /*yield*/, user.save()];
            case 4:
                _a.sent();
                res.status(200).json(study);
                return [2 /*return*/];
        }
    });
}); });
//  Private
//  PUT
//  v1/study/:studyId/quit
exports.quitStudy = asyncHandler_1.default(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var study, includesUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, study_1.Study.findById({ _id: req.params.studyId })];
            case 1:
                study = _a.sent();
                if (!study)
                    return [2 /*return*/, next('스터디가 존재하지 않습니다. ')];
                includesUser = !!study.participants.find(function (user) { return user.toString() === req.user._id.toString(); });
                if (!includesUser)
                    return [2 /*return*/, next('참석하지않은 스터디입니다. ')];
                study.participants = study.participants.filter(function (user) { return user.toString() !== req.user._id.toString(); });
                return [4 /*yield*/, study_1.Study.findByIdAndUpdate({ _id: req.params.studyId }, { participants: study.participants }, { new: true, runValidators: false })
                        .populate({
                        path: 'category',
                        model: 'StudyCategory',
                        select: 'name',
                    })
                        .populate({
                        path: 'user',
                        model: 'User',
                        select: 'username',
                    })
                        .populate({
                        path: 'participants',
                        model: 'User',
                        select: 'username email avatar',
                    })];
            case 2:
                study = _a.sent();
                return [4 /*yield*/, user_model_1.default.updateOne({ _id: req.user._id }, { $pull: { joinedStudies: study === null || study === void 0 ? void 0 : study._id } })];
            case 3:
                _a.sent();
                res.status(200).json(study);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=study.controller.js.map