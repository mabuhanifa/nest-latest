import { HashingService } from './hashing.service';

export class BcryptService implements HashingService {
  hash(value: string | Buffer): Promise<string> {}
  compare(value: string | Buffer, encrypted: string): Promise<boolean> {}
}
