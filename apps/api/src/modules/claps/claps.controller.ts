import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClapsService } from './claps.service';
// import { CreateClapDto } from './dto/create-clap.dto';
// import { UpdateClapDto } from './dto/update-clap.dto';
import { Clap } from '@prisma/client';

@Controller('claps')
export class ClapsController {
  constructor(private readonly clapsService: ClapsService) {}

  @Post()
  create(@Body() clap: Clap) {
    return this.clapsService.create(clap);
  }

  @Get()
  findAll() {
    return this.clapsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clapsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() clap: Clap) {
    return this.clapsService.update(+id, clap);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clapsService.remove(+id);
  }

  @Post('/check')
  checkIfClapped(@Body() clap: Clap) {
    return this.clapsService.checkIfClapped(clap);
  }
}
