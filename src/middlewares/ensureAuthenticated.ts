import { Request, Response, NextFunction } from 'express';
import { verify, Secret } from 'jsonwebtoken';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}
export default function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is Missing', 'error', 401);
  }

  // Bearer / Token
  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret as Secret);

    const { sub } = decoded as ITokenPayload;

    req.user = {
      id: sub,
    };
    return next();
  } catch {
    throw new AppError('JWT Token is Invalid', 'error', 401);
  }
}
