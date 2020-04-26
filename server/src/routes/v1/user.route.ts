import express from 'express';
import {
    login,
    me,
    register,
    updateProfile
    } from '../../controllers/v1/user.controller';
import { requireAuth } from '../../middlewares/requireAuth';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', requireAuth, me);
router.put('/updateprofile', requireAuth, updateProfile);

export default router;
