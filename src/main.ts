import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // whenever we need validation we use this. // Add { forbidUnknownValues: false }, if no decorators in dto

  await app.listen(3000);
}
bootstrap();
