import { Injectable } from '@nestjs/common';

// prisma client
import { prisma } from '@wh/prisma-client';

// schema
import { Definition } from '@prisma/client';

@Injectable()
export class CreateService {
  async create(definition: Definition) {
    const newDefinition = await prisma.definition.create({
      data: {
        ...definition,
      },
    });

    return newDefinition;
  }
}
