import express from 'express';
import v1Routers from './v1';

const router = express.Router();

router.use('/v1', v1Routers);

export default router;
