import mongoose, { Document, Schema } from 'mongoose';

export interface IStudyCategory extends Document {
  name: string;
}

const StudyCategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, '카테고리명은 필수입니다.'],
      maxlength: [20, '20자 이내로 입력해주세요.'],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IStudyCategory>('StudyCategory', StudyCategorySchema);
