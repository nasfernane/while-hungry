import { Injectable } from '@nestjs/common';

// prisma schema
import { Post } from '@prisma/client';

// prisma client
import  { prisma } from '@wh/prisma-client';

@Injectable()
export class FindAllService {
  /**
   * get all posts
   * @returns an array of Post
   */
  async findAll(): Promise<Post[]> {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      }
    })

    return posts;
  }

}
