import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  providers: [PostService, PrismaService],
  controllers: [PostController],
})
export class PostModule {}
