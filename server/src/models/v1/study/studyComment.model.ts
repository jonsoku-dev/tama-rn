import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from '../user.model';

export interface IStudyComment extends Document {
  content: string;
  user: IUser['_id'];
}

const StudyCommentSchema: Schema = new Schema(
  {
    content: {
      type: String,
      required: [true, '내용을 입력해주세요.'],
      maxlength: [1000, '1000자 이내로 입력해주세요.'],
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IStudyComment>('StudyComment', StudyCommentSchema);
