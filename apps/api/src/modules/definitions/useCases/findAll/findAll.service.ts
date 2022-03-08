import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// prisma schema
import { Definition } from '@prisma/client';

@Injectable()
export class FindAllService {
  /**
   * gets all definitions ordered by labels alphabetical order
   * @returns an array of definitions
   */
  async findAll() {
    const definitions: Definition[] = await prisma.definition.findMany({
      orderBy: {
        label: 'asc',
      }
    })

    return definitions;
  }
 
}
