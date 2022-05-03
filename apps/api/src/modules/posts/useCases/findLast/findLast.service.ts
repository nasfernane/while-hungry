import { Injectable } from '@nestjs/common';
// prisma client
import { prisma } from '@wh/prisma-client';

// prisma schema
import { Post } from '@prisma/client';

@Injectable()
export class FindLastService {
  /**
   * find last post created
   * @returns post
   */
  async findLast(): Promise<Post> {
    const post: Post = await prisma.post.findFirst({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        author: true,
      },
    });

    return post;
  }
}
