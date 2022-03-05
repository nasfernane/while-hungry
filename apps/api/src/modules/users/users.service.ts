import { Injectable } from '@nestjs/common';

import { User } from '@prisma/client';
import  { prisma } from '@wh/prisma-client';
import { Jwt } from './../../utils/jwt';

@Injectable()
export class UsersService {
  create(user: User) {
    console.log(user);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, userData: User) {
    const user = await prisma.user.update({
      where: {
        id: id,
      }, 
      data: {
        ...userData
      }
    })

    const accessToken = await Jwt.signAccessToken(user)
    delete user.password;

    return { ...user, accessToken };
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async updateAvatar(id: number, avatar: object) {
    await prisma.user.update({
      where: {
        id: id,
      }, 
      data: {
        ...avatar
      }
    })
  }
}
