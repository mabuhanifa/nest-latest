import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cors from 'cors';

const corsOptions: cors.CorsOptions = {
  origin: ['https://studio.apollographql.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors(corsOptions));

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Nest Prisma Example')
    .setDescription('Implementing Prisma in NestJS')
    .setVersion('1.0')
    .addTag('nestPrisma')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
