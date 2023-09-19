import { Injectable } from '@nestjs/common';
import { CreateDonationInput } from './dto/create-donation.input';
import { UpdateDonationInput } from './dto/update-donation.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DonationsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDonationInput: CreateDonationInput) {
    const donation = this.prismaService.donation.create({
      data: createDonationInput,
    });

    return donation;
  }

  findAll() {
    return this.prismaService.donation.findMany();
  }

  findOne(id: number) {}

  update(id: number, updateDonationInput: UpdateDonationInput) {
    return `This action updates a #${id} donation`;
  }

  remove(id: number) {
    return `This action removes a #${id} donation`;
  }
}
