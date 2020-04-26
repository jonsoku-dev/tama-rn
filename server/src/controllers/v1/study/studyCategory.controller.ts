import { Request, Response } from 'express';
import { StudyCategory } from '../../../models/v1/study';
import asyncHandler from '../../../utils/asyncHandler';

//  Public
//  GET
//  v1/studycategory
export const getCategories = asyncHandler(async (req: Request, res: Response, next) => {
  const categories = await StudyCategory.find().select('name');
  res.status(200).json(categories);
});

//  Private
//  POST
//  v1/studycategory
export const createCategory = asyncHandler(async (req: Request, res: Response, next) => {
  const newCategory = await StudyCategory.create(req.body);
  res.status(201).json(newCategory);
});

//  Private
//  PUT
//  v1/studycategory/:categoryId
export const updateCategory = asyncHandler(async (req: Request, res: Response, next) => {
  const updatedCategory = await StudyCategory.findByIdAndUpdate(
    { _id: req.params.categoryId },
    { ...req.body },
    {
      new: true,
      runValidators: false,
    },
  );
  if (!updatedCategory) return next('존재하지않는 카테고리입니다. ');
  res.status(200).json(updatedCategory);
});

//  Private
//  DELETE
//  v1/studycategory/:categoryId
export const deleteCategory = asyncHandler(async (req: Request, res: Response, next) => {
  const deletedCategory = await StudyCategory.findByIdAndDelete({ _id: req.params.categoryId });
  if (!deletedCategory) return next('존재하지않는 카테고리입니다. ');
  res.status(200).json(deletedCategory);
});
