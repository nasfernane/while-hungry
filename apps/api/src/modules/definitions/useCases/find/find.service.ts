import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// schema
import { Definition } from '@prisma/client';

@Injectable()
export class FindService {
  /**
   * finds a definition based on id
   * @param id 
   * @returns definition
   */
  async find(id: number) {
    const definition: Definition = await prisma.definition.findFirst({
      where: {
        id
      }
    })

    return definition;
  }
}
