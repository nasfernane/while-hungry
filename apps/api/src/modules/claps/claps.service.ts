import { Injectable } from '@nestjs/common';
// import { CreateClapDto } from './dto/create-clap.dto';
// import { UpdateClapDto } from './dto/update-clap.dto';

import  { prisma } from '@wh/prisma-client';
import { Clap } from '@prisma/client';

@Injectable()
export class ClapsService {

  create(clap: Clap) {
    const newClap = prisma.clap.create({
      data: {
        clapperId: +clap.clapperId,
        clappedId: +clap.clappedId
      }
    })

    return newClap;
  }

  findAll() {
    return `This action returns all claps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clap`;
  }

  update(id: number, clap: Clap) {
    return `This action updates a #${id} clap`;
  }

  remove(id: number) {
    return `This action removes a #${id} clap`;
  }

  async checkIfClapped(clap: Clap) {
    const clapExists = await prisma.clap.findFirst({
      where: {
        clapperId: +clap.clapperId,
        clappedId: +clap.clappedId
      }
    })

    if (clapExists) {
      return true;
    } else {
      false;
    }
  }

  async getUserClapsCount(id: number) {
    const count = await prisma.clap.count({
      where: {
        clappedId: +id
      }
    })

    return count;
  }
}
