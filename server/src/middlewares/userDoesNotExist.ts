import { NextFunction, Request, Response } from 'express';
import { findByEmail } from '../db/models/user.model';
import { BadRequestError } from '../common/errors';

export const userDoesNotExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await findByEmail(req.body.email);

  if (user) {
    throw new BadRequestError('Email already exists');
  }

  next();
};
