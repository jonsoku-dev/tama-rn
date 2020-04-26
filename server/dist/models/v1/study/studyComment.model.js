"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var StudyCommentSchema = new mongoose_1.Schema({
    content: {
        type: String,
        required: [true, '내용을 입력해주세요.'],
        maxlength: [1000, '1000자 이내로 입력해주세요.'],
        trim: true,
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('StudyComment', StudyCommentSchema);
//# sourceMappingURL=studyComment.model.js.map