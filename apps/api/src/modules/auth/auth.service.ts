import { Injectable } from '@nestjs/common';
import { prisma  } from '@wh/prisma-client';
import  createError   from 'http-errors';
import * as bcrypt from 'bcrypt';
import { Jwt } from './../../utils/jwt';

import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

import { UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../../filters/http-exception.filter';

@Injectable()
@UseFilters(new HttpExceptionFilter())
export class AuthService {
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

  async updatePassword(id: number, passwords: any) {
    const { oldPassword, password } = passwords;

    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })

    // if user not found or wrontg credentials
    if (!user || !bcrypt.compareSync(oldPassword, user.password)) {
      return { status: 404, message: "Bad credentials" }
    } else {
      const updatedUser = await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          // hash new password
          password: bcrypt.hashSync(password, 8),
        },
      })

      const accessToken = await Jwt.signAccessToken(updatedUser)

      return { ...updatedUser, accessToken };
    }
  }
}
