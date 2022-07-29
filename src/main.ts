import { NestFactory } from '@nestjs/core';
import { BookModule } from './book/book.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(BookModule, {cors: true});

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3001);
}
bootstrap();
