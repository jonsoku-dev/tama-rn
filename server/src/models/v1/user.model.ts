import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose, { Document, Schema } from 'mongoose';
import { IStudy } from './study/study.model';
import config from '../../config';
import emailValidator from '../../utils/emailValidator';

export interface IUser extends Document {
  username: string;
  avatar: string;
  email: string;
  password: string;
  joinedStudies: IStudy['_id'][];
  comparePassword: (candidatePassword: string) => boolean;
  generateJWT: () => string;
  toAuthJSON: () => IAuthJSON;
}

interface IAuthJSON {
  _id: IUser['_id'];
  avatar: IUser['avatar'];
  username: IUser['username'];
  email: IUser['email'];
  joinedStudies: IUser['joinedStudies'];
  token: string;
}

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: [true, '유저명은 필수입니다. '],
    },
    avatar: {
      type: String,
    },
    email: {
      type: String,
      required: [true, '이메일은 필수입니다. '],
      unique: [true, '이메일이 중복되었습니다. '],
      lowercase: true,
      trim: true,
      validate: [emailValidator, '정상적인 이메일을 입력해주세요. '],
    },
    password: {
      type: String,
      required: [true, '비밀번호는 필수입니다. '],
      trim: true,
    },
    joinedStudies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Study',
      },
    ],
  },
  {
    timestamps: true,
  },
);

UserSchema.pre<IUser>('save', async function (this: IUser, next) {
  try {
    if (!this.isModified('password')) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  } catch (err) {
    next(err);
  }
});

UserSchema.methods.comparePassword = async function (candidatePassword): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password);
};

UserSchema.methods.generateJWT = function (): string {
  const token = jwt.sign(
    {
      id: this._id,
      email: this.email,
    },
    config.JWT_SECRET,
    { expiresIn: '1h' },
  );
  return token;
};

UserSchema.methods.toAuthJSON = function (): IAuthJSON {
  return {
    _id: this._id,
    avatar: this.avatar,
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
    joinedStudies: this.joinedStudies,
  };
};

// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', UserSchema);
