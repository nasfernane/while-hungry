import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from "jsonwebtoken";

@Injectable()
export class CheckAuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;
    const decoded = token ? jwt.verify(token, process.env['ACCESS_TOKEN_SECRET'] as string) : null;

    if (!token || !decoded) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    };

    next();
  }
}
