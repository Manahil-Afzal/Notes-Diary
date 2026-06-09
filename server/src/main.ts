import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // For JSON body parsing, Nest already handles it.
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();

