import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticationService } from './authentication.service';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';

@ApiTags('Authentication Module')
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('/signup')
  signup(@Body() dto: SignupDto) {
    return this.authenticationService.signup(dto);
  }

  @Post('/signin')
  signin(@Body() signInDto: SigninDto) {
    return this.authenticationService.signin(signInDto);
  }
}
