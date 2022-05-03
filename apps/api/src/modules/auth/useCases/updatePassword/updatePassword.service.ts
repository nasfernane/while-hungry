import { Injectable } from '@nestjs/common';
import { prisma } from '@wh/prisma-client';
import * as bcrypt from 'bcrypt';
import { Jwt } from './../../../../utils/jwt';
import { UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from './../../../../filters/http-exception.filter';

@Injectable()
@UseFilters(new HttpExceptionFilter())
export class UpdatePasswordService {
  async updatePassword(id: number, passwords: any) {
    const { oldPassword, password } = passwords;

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    // if user not found or wrontg credentials
    if (!user || !bcrypt.compareSync(oldPassword, user.password)) {
      return { status: 404, message: 'Bad credentials' };
    } else {
      const updatedUser = await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          // hash new password
          password: bcrypt.hashSync(password, 8),
        },
      });

      const accessToken = await Jwt.signAccessToken(updatedUser);

      return { ...updatedUser, accessToken };
    }
  }
}
