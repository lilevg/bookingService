import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";

async function bootstrap() {
  const PORT = 3000 || process.env.PORT;
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  await app.listen(PORT, () =>  console.log(`Server has been started http://localhost:${PORT}`));
}
bootstrap();