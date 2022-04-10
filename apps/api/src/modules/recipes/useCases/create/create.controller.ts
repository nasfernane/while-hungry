import { Controller, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateService } from './create.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Multer } from 'multer';
import * as path from 'path';

import { Recipe } from '@prisma/client';

// const dir = path.join(__dirname, '/assets/pictures/recipes')

@Controller('recipes')
export class CreateController {
  constructor(private readonly service: CreateService) {}

  @Post()
  create(@Body() recipe: Recipe) {
    return this.service.create(recipe);
  }

  @Post('/picture')
  @UseInterceptors(FileInterceptor('picture', {
    storage: diskStorage({
      destination: __dirname + '/public',
      filename: (req, file, cb) => {
         const randomName = Array(32).fill(null).map(() => 
        (Math.round(Math.random() * 16)).toString(16)).join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
          },
        }),
       }))

  /**
   * The function takes a picture as a parameter, and then returns the result of the storePicture
   * function in the service
   * @param picture - Express.Multer.File
   */
  storePicture(@UploadedFile() picture: Express.Multer.File) {
    return this.service.storePicture(picture);
  }
}
