import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class SignupDto {
  @ApiProperty({ description: 'Please enter your name' })
  @IsOptional()
  name?: string;

  @ApiProperty({ description: 'Please enter your email' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Please enter your password' })
  @IsNotEmpty()
  password: string;
}
