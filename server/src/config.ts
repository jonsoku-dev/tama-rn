import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'product') {
  dotenv.config({ path: '../.env' });
}

export default {
  PORT: process.env.NODE_PORT || 5000,
  MONGO_URL: process.env.MONGO_URI || '',
  JWT_SECRET: process.env.NODE_JWT_SECRET || '',
};
