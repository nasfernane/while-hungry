import { Injectable } from '@nestjs/common';
import { prisma  } from '@wh/prisma-client';
import { createError }  from 'http-errors';
import { bcrypt } from 'bcrypt';


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
      throw createError.NotFound('User not registered !');
    }

    const checkPassword = bcrypt.compareSync(password, user.password) 

    if (!checkPassword) throw createError.Unauthorized('Email address or password invalid');
    delete user.password;

    return { ...user };

    // const accessToken = await jwt.signAccessToken(user)
    // const accessToken = await jwt.signAccessToken(user);
  }
}
