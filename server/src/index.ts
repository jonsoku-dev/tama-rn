import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import path from 'path';
import xss from 'xss-clean';
import config from './config';
import routes from './routes';
import './services/passport';
import mongoDB from './utils/connectDB';
import errorResponse from './utils/errorResponse';

const app: express.Application = express();
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10분
  max: 100000,
});
const corsOption = { origin: 'http://localhost:3000' };

// 미들웨어
app.use(
  helmet(),
  xss(),
  cors(corsOption),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  morgan('dev'),
  mongoSanitize(),
  limiter,
  hpp(),
);

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.use(errorResponse);

app.listen(config.PORT, () => {
  mongoDB();
  console.log(`> SERVER : ${config.PORT}번 포트로 연결되었습니다. `);
});
