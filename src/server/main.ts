import { NestFactory } from '@nestjs/core';
import { PORT } from '@shared/env';
import { RenderService } from 'nest-next';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const renderService = app.get(RenderService);
  renderService.setErrorHandler(async (err, _req, res) => {
    if (res.statusCode !== 404) res.send(err.response);
  });
  await app.listen(PORT);
}

bootstrap();
