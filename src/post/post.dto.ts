import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class PostDto {
  @ApiProperty({ description: 'Please enter your title' })
  @IsString()
  title: string;

  @ApiPropertyOptional({ description: 'Please enter your valid description' })
  @IsEmail()
  description?: string;
}
