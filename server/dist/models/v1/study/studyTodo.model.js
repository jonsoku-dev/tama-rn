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
var StudyTodoSchema = new mongoose_1.Schema({
    content: {
        type: String,
        required: [true, '스터디 Todo항목을 입력해주세요.'],
        maxlength: [30, '30자 이내로 입력해주세요.'],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    study: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Study',
        required: true,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('StudyTodo', StudyTodoSchema);
//# sourceMappingURL=studyTodo.model.js.map