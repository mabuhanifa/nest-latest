import { Body, Controller, Post } from '@nestjs/common';
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
}
