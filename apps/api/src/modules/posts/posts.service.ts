import { Injectable } from '@nestjs/common';
// import { CreatePostDto } from './dto/create-post.dto';
// import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from '@prisma/client';
import  { prisma } from '@wh/prisma-client';

@Injectable()
export class PostsService {
  create(post: Post) {
    prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        published: false,
        authorId: post.authorId
      }
    })
  }

  findAll(): Promise<Post[]> {
    return prisma.post.findMany({
      include: {
        author: true,
      }
    })
  }

  findOne(id: number) {
    return prisma.post.findUnique({
      where: {
        id: id
      },
      include: {
        author: true,
      }
    })
  }

  update(id: number, post: Post) {
    return prisma.post.update({
      where: {
        id: id
      },
      data: post
    })
  }

  remove(id: number) {
    return prisma.post.delete({
      where: {
        id: id
      },
    })
  }
}
