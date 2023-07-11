import { Injectable } from '@nestjs/common';
import { HashingService } from '../hashing/hashing.service';
import { PrismaService } from './../../prisma/prisma.service';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly prismaService: PrismaService,

    private readonly hashingService: HashingService,
  ) {}

  async signup(signupDto: SignupDto) {
    return this.prismaService.user.create({
      data: {
        name: signupDto.name,
        email: signupDto.email,
        password: await this.hashingService.hash(signupDto.password),
      },
    });
  }

  async signin(signinDto: SignupDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: signinDto.email,
      },
    });

    if (!user) {
      return null;
    }

    const isMatch = await this.hashingService.compare(
      signinDto.password,
      user.password,
    );

    if (!isMatch) {
      return null;
    }

    return user;
  }
}
