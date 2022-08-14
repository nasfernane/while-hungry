import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { prisma } from '@wh/prisma-client';

@Injectable()
export class CreateService {
  async create(post: Post) {
    console.log('new post')
    const newPost = await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        picture: post.picture,
        published: false,
        authorId: post.authorId,
      },
    });

    return newPost;
  }
}
