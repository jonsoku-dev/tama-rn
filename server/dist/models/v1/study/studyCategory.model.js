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
var StudyCategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, '카테고리명은 필수입니다.'],
        maxlength: [20, '20자 이내로 입력해주세요.'],
        trim: true,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('StudyCategory', StudyCategorySchema);
//# sourceMappingURL=studyCategory.model.js.map