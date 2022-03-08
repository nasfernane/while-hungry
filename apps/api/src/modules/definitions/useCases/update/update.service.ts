import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// prisma schema
import { Definition } from '@prisma/client';

@Injectable()
export class UpdateService {

   /**
   * update a definition based on id
   * @param id 
   * @param definition 
   * @returns updated definition
   */
  async update(id: number, definition: Definition) {
    const updatedDefinition = await prisma.definition.update({
      where: {
        id
      },
      data: {
        ...definition
      }
    })

    return updatedDefinition;
  }

}
