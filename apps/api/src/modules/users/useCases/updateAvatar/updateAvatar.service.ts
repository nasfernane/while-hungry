import { Injectable } from '@nestjs/common';

// prisma schema
import { User } from '@prisma/client';

// prisma client
import { prisma } from '@wh/prisma-client';

// utils
import { Jwt } from './../../../../utils/jwt';

@Injectable()
export class UpdateAvatarService {
  async updateAvatar(id: number, avatar: object) {
    const user: User = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...avatar,
      },
    });

    if (user) {
      const accessToken = await Jwt.signAccessToken(user);
      delete user.password;
      return { ...user, accessToken };
    }
  }
}
