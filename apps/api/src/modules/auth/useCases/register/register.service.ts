import { Injectable } from '@nestjs/common';
import { prisma  } from '@wh/prisma-client';
import  createError   from 'http-errors';
import * as bcrypt from 'bcrypt';
import { Jwt } from './../../../../utils/jwt';

import { UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from './../../../../filters/http-exception.filter';

@Injectable()
@UseFilters(new HttpExceptionFilter())
export class RegisterService {
  async register(param) {
    const { email, nickname, passwordConfirm } = param;
    let { password } = param;
    
    if (password === passwordConfirm) {
      password = bcrypt.hashSync(password, 8)
      const user = await prisma.user.create({
        data: { email, nickname, password }
      })

      const accessToken = await Jwt.signAccessToken(user)

      return { ...user, accessToken };

    } else {
      throw new createError.NotFound('Password and confirmation are not identical');
    }
  }
}