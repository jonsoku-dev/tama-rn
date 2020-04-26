import express from 'express';
import { studyCategoryRouters, studyRouters } from './study';
import userRouters from './user.route';

const router = express.Router();

router.use('/user', userRouters);
router.use('/study', studyRouters);
router.use('/studycategory', studyCategoryRouters);

export default router;
