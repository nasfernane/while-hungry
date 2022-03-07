import { Injectable } from '@nestjs/common';
import { CreateDefinitionDto } from './dto/create-definition.dto';
import { UpdateDefinitionDto } from './dto/update-definition.dto';

import  { prisma } from '@wh/prisma-client';
import { Definition } from '@prisma/client';

@Injectable()
export class DefinitionsService {
  create(definition: Definition) {
    return definition;
  }

  async findAll() {
    const definitions = await prisma.definition.findMany({
      orderBy: {
        label: 'asc',
      }
    })

    return definitions;
  }

  findOne(id: number) {
    return `This action returns a #${id} definition`;
  }

  update(id: number, definition: Definition) {
    return definition;
  }

  remove(id: number) {
    return `This action removes a #${id} definition`;
  }
}
