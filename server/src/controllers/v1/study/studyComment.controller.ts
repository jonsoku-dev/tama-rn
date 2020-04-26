import { Request, Response } from 'express';
import { Study, StudyComment } from '../../../models/v1/study';
import asyncHandler from '../../../utils/asyncHandler';

//  Public
//  GET
//  v1/study/:studyId/comment
export const getComments = asyncHandler(async (req: Request, res: Response, next) => {
  const comments = await StudyComment.find();
  res.status(200).json(comments);
});

//  Private
//  POST
//  v1/study/:studyId/comment
export const createComment = asyncHandler(async (req, res: Response, next) => {
  const newComment = await StudyComment.create({ ...req.body, user: req.user._id });
  const study = await Study.findById({ _id: req.params.studyId });
  if (!study) return next('스터디가 존재하지않습니다. ');
  study.comments.push(newComment._id);
  await study.save();
  res.status(200).json(newComment);
});

//  Private
//  PUT
//  v1/study/:studyId/comment/:commentId
export const updateComment = asyncHandler(async (req: Request, res: Response, next) => {
  const updatedComment = await StudyComment.findByIdAndUpdate(
    { _id: req.params.commentId },
    { ...req.body },
    { new: true, runValidators: false },
  );
  if (!updatedComment) return next('해당 코멘트는 존재하지 않습니다. ');
  res.status(200).json(updatedComment);
});

//  Private
//  DELETE
//  v1/study/:studyId/comment/:commentId
export const deleteComment = asyncHandler(async (req, res: Response, next) => {
  let comment = await StudyComment.findById({ _id: req.params.commentId });
  if (!comment) return next('코멘트가 존재하지 않습니다. ');
  if (comment.user.toString() !== req.user._id.toString())
    return next(new Error('해당 권한이 없습니다.'));
  // cascade
  await Study.updateOne({ _id: req.params.studyId }, { $pull: { comments: comment._id } });
  await comment.remove();
  res.status(200).json(comment);
});
