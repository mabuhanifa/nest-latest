import { Injectable } from '@nestjs/common';
import { HashingService } from '../hashing/hashing.service';
import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly hashingService: HashingService,
  ) {}
}
