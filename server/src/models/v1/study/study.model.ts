import mongoose, { Document, Schema } from 'mongoose';
import { IStudyCategory } from './studyCategory.model';
import { IStudyComment } from './studyComment.model';
import { IStudyTodo } from './studyTodo.model';
import { IUser } from '../user.model';

export interface IStudy extends Document {
  category: IStudyCategory['_id'];
  title: string;
  description: string;
  thumbnail: string;
  lat: number;
  lng: number;
  address: string;
  view: number;
  likes: IUser['_id'][];
  user: IUser['_id'];
  minParticipants: number;
  maxParticipants: number;
  participants: IUser['_id'][];
  todos: IStudyTodo['_id'][];
  comments: IStudyComment['_id'][];
}

const StudySchema: Schema = new Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
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
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    ],
    user: {
      type: mongoose.Types.ObjectId,
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
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    ],
    todos: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'StudyTodo',
      },
    ],
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'StudyComment',
      },
    ],
  },
  {
    timestamps: true,
  },
);

StudySchema.pre<IStudy>('save', function (this: IStudy, next) {
  const includesUser = !!this.participants.find((user) => user.toString() === this.user.toString());
  if (includesUser) {
    next();
  } else {
    this.participants = [...this.participants, this.user];
    next();
  }
});

export default mongoose.model<IStudy>('Study', StudySchema);
