import {
  Controller,
  Get,
  Param,
  StreamableFile,
  Response,
} from '@nestjs/common';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';

@Controller('getpicture')
export class GetPictureController {
  @Get(':name')
  /**
   * Find a file by name and return it as a streamable file
   * @param {string} name - The name of the file to be returned.
   * @param res - The response object.
   * @returns A StreamableFile object.
   */
  find(
    @Param('name') name: string,
    @Response({ passthrough: true }) res
  ): StreamableFile {
    // return this.service.find(name);
    const fileExists = existsSync(join(__dirname, 'assets/public/' + name));
    let file;

    // const file = createReadStream(join(__dirname, 'public/' + name));
    if (fileExists) {
      file = createReadStream(join(__dirname, 'assets/public/' + name));
    } else {
      file = createReadStream(join(__dirname, 'assets/public/nopicture.jpg'));
    }

    res.set({
      'Content-Type': 'image/jpeg',
      'Content-Disposition': 'attachment; filename="picture.jpeg"',
    });
    return new StreamableFile(file);
  }
}
