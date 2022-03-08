import { Injectable } from '@nestjs/common';

// prisma client
import  { prisma } from '@wh/prisma-client';

// prisma schema
import { Post } from '@prisma/client';

@Injectable()
export class FindService {
  async find(id: number): Promise<Post> {
    const post: Post = await prisma.post.findUnique({
      where: {
        id: id
      }, 
      include: {
        author: true,
      }
    })

    return post;
  }
}
