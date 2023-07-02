import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticationService } from './authentication.service';
import { SignupDto } from './dto/signup.dto';

@ApiTags('Authentication Module')
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('/signup')
  signup(@Body() dto: SignupDto) {
    return this.authenticationService.signup(dto);
  }
}
