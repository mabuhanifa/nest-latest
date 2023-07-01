import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PostDto {
  @ApiProperty({ description: 'Please enter your title' })
  @IsString()
  title: string;

  @ApiPropertyOptional({ description: 'Please enter your description' })
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Please enter author_id' })
  @IsString()
  author_id?: number;
}
