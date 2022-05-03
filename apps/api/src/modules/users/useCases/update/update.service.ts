import { Injectable } from '@nestjs/common';

// utils
import { Jwt } from './../../../../utils/jwt';

// prisma client
import { prisma } from '@wh/prisma-client';

// prisma schema
import { User } from '@prisma/client';

@Injectable()
export class UpdateService {
  /**
   * updates user data based on id
   * @param id
   * @param user
   * @returns new user data
   */
  async update(id: number, userData: User) {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...userData,
      },
    });

    const accessToken = await Jwt.signAccessToken(user);
    delete user.password;

    return { ...user, accessToken };
  }
}
