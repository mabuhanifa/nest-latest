import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { IamModule } from './iam/iam.module';

@Module({
  imports: [UserModule, PostModule, IamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
