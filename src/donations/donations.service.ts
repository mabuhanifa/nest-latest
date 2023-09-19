import { Injectable } from '@nestjs/common';
import { CreateDonationInput } from './dto/create-donation.input';
import { UpdateDonationInput } from './dto/update-donation.input';

const data = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
];

@Injectable()
export class DonationsService {
  create(createDonationInput: CreateDonationInput) {
    data.push(createDonationInput);
    return createDonationInput;
  }

  findAll() {
    return data;
  }

  findOne(id: number) {
    return data.find((item) => item.id === id);
  }

  update(id: number, updateDonationInput: UpdateDonationInput) {
    return `This action updates a #${id} donation`;
  }

  remove(id: number) {
    return `This action removes a #${id} donation`;
  }
}
