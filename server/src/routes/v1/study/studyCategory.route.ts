import express from 'express';
import { requireAuth } from '../../../middlewares/requireAuth';
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from '../../../controllers/v1/study/studyCategory.controller';

const router = express.Router();

router.get('/', getCategories);
router.post('/', requireAuth, createCategory);
router.put('/:categoryId', requireAuth, updateCategory);
router.delete('/:categoryId', requireAuth, deleteCategory);

export default router;
