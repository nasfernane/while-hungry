import { Injectable } from '@nestjs/common';

import  { prisma } from '@wh/prisma-client';

@Injectable()
export class DeleteService {

  async delete(id: number) {
    await prisma.definition.delete({
      where: {
        id
      }
    })
  }
}
