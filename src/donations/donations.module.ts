import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { DonationsResolver } from './donations.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [DonationsResolver, DonationsService, PrismaService],
})
export class DonationsModule {}
