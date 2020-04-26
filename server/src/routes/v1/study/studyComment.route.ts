import express from 'express';
import { requireAuth } from '../../../middlewares/requireAuth';
import {
  createComment,
  deleteComment,
  getComments,
  updateComment,
} from '../../../controllers/v1/study/studyComment.controller';

const router = express.Router({ mergeParams: true });

router.get('/', getComments);
router.post('/', requireAuth, createComment);
router.put('/:commentId', requireAuth, updateComment);
router.delete('/:commentId', requireAuth, deleteComment);

export default router;
