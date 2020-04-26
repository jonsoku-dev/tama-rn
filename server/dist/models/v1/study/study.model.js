"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var StudySchema = new mongoose_1.Schema({
    category: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'StudyCategory',
        required: [true, 'category는 필수사항입니다. '],
    },
    title: {
        type: String,
        required: [true, '타이틀을 입력해주세요. '],
    },
    description: {
        type: String,
        required: [true, '본문을 입력해주세요. '],
    },
    thumbnail: {
        type: String,
        required: [true, '썸네일주소를 입력해주세요.'],
    },
    lat: {
        type: Number,
        required: [true, '위도(latitude)를 입력해주세요. '],
        trim: true,
    },
    lng: {
        type: Number,
        required: [true, '경도(longitude)를 입력해주세요. '],
        trim: true,
    },
    address: {
        type: String,
        required: [true, '주소를 입력해주세요.'],
    },
    view: {
        type: Number,
        default: 0,
    },
    likes: [
        {
            type: mongoose_1.default.Types.ObjectId,
            ref: 'User',
        },
    ],
    user: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    minParticipants: {
        type: Number,
        min: [2, '설정가능한 최소인원은 2명입니다. '],
        max: [19, '설정가능한 최대인원은 20명입니다. '],
        required: [true, '최소인원을 입력해주세요. '],
        default: 2,
    },
    maxParticipants: {
        type: Number,
        min: [2, '설정가능한 최소인원은 20명입니다. '],
        max: [10, '설정가능한 최대인원은 10명입니다. '],
        required: [true, '최대인원을 입력해주세요. '],
        default: 10,
    },
    participants: [
        {
            type: mongoose_1.default.Types.ObjectId,
            ref: 'User',
        },
    ],
    todos: [
        {
            type: mongoose_1.default.Types.ObjectId,
            ref: 'StudyTodo',
        },
    ],
    comments: [
        {
            type: mongoose_1.default.Types.ObjectId,
            ref: 'StudyComment',
        },
    ],
}, {
    timestamps: true,
});
StudySchema.pre('save', function (next) {
    var _this = this;
    var includesUser = !!this.participants.find(function (user) { return user.toString() === _this.user.toString(); });
    if (includesUser) {
        next();
    }
    else {
        this.participants = __spreadArrays(this.participants, [this.user]);
        next();
    }
});
exports.default = mongoose_1.default.model('Study', StudySchema);
//# sourceMappingURL=study.model.js.map