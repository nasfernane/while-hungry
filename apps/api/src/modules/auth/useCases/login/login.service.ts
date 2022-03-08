import { Injectable } from '@nestjs/common';
import { prisma  } from '@wh/prisma-client';
import * as bcrypt from 'bcrypt';
import { Jwt } from './../../../../utils/jwt';

import { UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from './../../../../filters/http-exception.filter';

@Injectable()
@UseFilters(new HttpExceptionFilter())
export class LoginService {

  async login(param) {
    const { email, password } = param;
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    // if user not found or wrontg credentials
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return { status: 404, message: "Bad credentials" }
    }

    delete user.password;
    const accessToken = await Jwt.signAccessToken(user)

    return { ...user, accessToken };
  }
}
