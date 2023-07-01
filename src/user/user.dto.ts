import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({ description: 'Please enter your name' })
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Please enter your valid email' })
  @IsEmail()
  email: string;
}