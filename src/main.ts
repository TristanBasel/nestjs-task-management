import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';

async function bootstrap() {
  // instantiate Logger.
  const logger = new Logger();

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // whenever we need validation we use this. // Add { forbidUnknownValues: false }, if no decorators in dto
  app.useGlobalInterceptors(new TransformInterceptor());

  const port = 3000;
  await app.listen(port);
  logger.log(`Application is listening on port ${port}.`);
}
bootstrap();
