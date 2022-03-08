import { Injectable } from '@nestjs/common';
// import { CreateClapDto } from './dto/create-clap.dto';
// import { UpdateClapDto } from './dto/update-clap.dto';

import  { prisma } from '@wh/prisma-client';
import { Clap } from '@prisma/client';

@Injectable()
export class CreateService {
  async create(clap: Clap) {
    const newClap = await prisma.clap.create({
      data: {
        clapperId: +clap.clapperId,
        clappedId: +clap.clappedId
      }
    })

    return newClap;
  }
}
