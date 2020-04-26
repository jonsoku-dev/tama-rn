import express from 'express';
import { requireAuth } from '../../../middlewares/requireAuth';
import {
  createTodo,
  deleteTodo,
  updateTodo,
  getTodos,
} from '../../../controllers/v1/study/studyTodo.controller';

const router = express.Router({ mergeParams: true });

router.get('/', getTodos);
router.post('/', requireAuth, createTodo);
router.put('/:todoId', requireAuth, updateTodo);
router.delete('/:todoId', requireAuth, deleteTodo);

export default router;
