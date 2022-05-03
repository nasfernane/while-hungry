import { Injectable } from '@nestjs/common';
import { prisma } from '@wh/prisma-client';

@Injectable()
export class CountService {
  /**
   * gets claps count of user
   * @param id
   * @returns number
   */
  async count(id: number) {
    const count = await prisma.clap.count({
      where: {
        clappedId: +id,
      },
    });

    return count;
  }
}
