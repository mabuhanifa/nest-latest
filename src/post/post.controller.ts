import { Body, Controller, Post } from '@nestjs/common';
import { PostDto } from './post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/post')
  createPost(@Body() postDto: PostDto) {
    return this.postService.createPost(postDto);
  }
}
