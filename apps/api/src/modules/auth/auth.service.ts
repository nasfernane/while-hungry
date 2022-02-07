import { Injectable } from '@nestjs/common';
import { prisma  } from '@wh/prisma-client';
import  createError   from 'http-errors';
import * as bcrypt from 'bcrypt';
import { Jwt } from './../../utils/jwt';

@Injectable()
export class AuthService {
  register(param) {
    console.log(param);
  }

  async login(param) {
    const { email, password } = param;
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!user) {
      throw new createError.NotFound('User not registered !');
    }

    const checkPassword = bcrypt.compareSync(password, user.password) 

    if (!checkPassword) throw new createError.Unauthorized('Email address or password invalid');
    delete user.password;
    const accessToken = await Jwt.signAccessToken(user)

    return { ...user, accessToken };

  }
}
