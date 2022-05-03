import { Injectable } from '@nestjs/common';
import { prisma } from '@wh/prisma-client';
import { Clap } from '@prisma/client';

@Injectable()
export class CheckService {
  /**
   * check if user already clapped the author
   * @param clap
   * @returns a boolean
   */
  async check(clap: Clap) {
    const clapExists = await prisma.clap.findFirst({
      where: {
        clapperId: +clap.clapperId,
        clappedId: +clap.clappedId,
      },
    });

    if (clapExists) {
      return true;
    } else {
      false;
    }
  }
}
