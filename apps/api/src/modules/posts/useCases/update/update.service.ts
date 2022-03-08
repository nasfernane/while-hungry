import { Injectable } from '@nestjs/common';

// prisma schema
import { Post } from '@prisma/client';

// prisma client
import  { prisma } from '@wh/prisma-client';

@Injectable()
export class UpdateService {
   /**
   * update a post based on id
   * @param id 
   * @param post 
   * @returns updated post
   */
  async update(id: number, post: Post): Promise<Post> {
    const updatedPost: Post = await prisma.post.update({
      where: {
        id: id
      },
      data: post
    })

    return updatedPost;
  }

}
