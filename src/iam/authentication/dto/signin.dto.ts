import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SigninDto {
  @ApiProperty({ description: 'Please enter your email' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Please enter your password' })
  @IsNotEmpty()
  password: string;
}
