import { Request, Response } from 'express';

export async function getUser(req: Request, res: Response) {
  const { user } = req;

  return res.status(200).send({ user });
}
