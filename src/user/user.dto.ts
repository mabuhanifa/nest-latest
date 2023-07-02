import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({ description: 'Please enter your name' })
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Please enter your valid email' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Please enter your password' })
  @IsNotEmpty()
  password: string;
}

export class ParamDto {
  @ApiProperty({ description: 'Please enter your id' })
  @IsString()
  id: string;
}
