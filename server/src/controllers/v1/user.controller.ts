import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import User from '../../models/v1/user.model';
import { IUser } from '../../models/v1/user.model';
import asyncHandler from '../../utils/asyncHandler';

export const register = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return next('존재하는 email입니다. ');
  user = await User.create(req.body);
  return res.status(201).json(user);
});

export const login = asyncHandler(async (req, res, next) => {
  return passport.authenticate('local', (err, passportUser: IUser) => {
    if (err) {
      return next(err);
    }
    if (passportUser) {
      return res.json(passportUser.toAuthJSON());
    } else {
      return next('Invalid password or email');
    }
  })(req, res, next);
});

export const me = asyncHandler((req, res, next) => {
  const user: IUser = req.user;
  if (!user) {
    return next('유저가 존재하지 않습니다. ');
  }
  return res.json(user.toAuthJSON());
});

export const updateProfile = asyncHandler(async (req, res, next) => {
  if (req.body.email) return next('이메일은 변경할 수 없습니다. ');
  if (req.body.password) return next('패스워드는 변경할 수 없습니다. ');
  const updatedUser = await User.findByIdAndUpdate(
    { _id: req.user._id },
    { ...req.body },
    { new: true, runValidators: false },
  );
  res.status(201).json(updatedUser);
});

export const deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndDelete({ _id: req.user._id });
  if (!user) return next('유저가 존재하지 않습니다. ');
  res.status(200).json(user);
});
