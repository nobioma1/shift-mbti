import { NextFunction, Request, Response } from 'express';
import { findByEmail } from '../db/models/user.model';
import { NotFoundError } from '../common/errors';

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

export const userExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await findByEmail(req.body.email);

  if (!user) {
    throw new NotFoundError('User does not Exist');
  }

  req.user = user;
  next();
};
