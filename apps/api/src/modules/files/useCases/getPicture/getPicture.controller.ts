import { Controller, Get, Param, StreamableFile, Response } from '@nestjs/common';
import { createReadStream } from 'fs';
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
  find(@Param('name') name: string, @Response({ passthrough: true }) res): StreamableFile {
    // return this.service.find(name);

    const file = createReadStream(join(__dirname, 'public/' + name))
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="test.jpeg"',
    });
    return new StreamableFile(file);
  }

}
