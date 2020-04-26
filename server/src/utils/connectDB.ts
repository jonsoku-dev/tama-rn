import mongoose from 'mongoose';
import config from '../config';

export default async () => {
  try {
    await mongoose.connect(config.MONGO_URL || '', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('> SERVER : 몽고디비에 연결되었습니다. ');
  } catch (error) {
    console.error('> SERVER : 몽고디비 연결 에러입니다 >' + error);
  }
};
