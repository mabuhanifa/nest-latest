import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  createNewUser(@Body() userDto: UserDto) {
    try {
      this.userService.createUser(userDto);
    } catch (error) {
      throw error;
    }
  }
  @Get('/posts')
  getAllPosts() {
    try {
      return this.userService.getAllPosts(id);
    } catch (error) {
      throw error;
    }
  }
}
