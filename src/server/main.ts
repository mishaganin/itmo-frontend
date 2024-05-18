import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from '@shared/env';
import { RenderService } from 'nest-next';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const renderService = app.get(RenderService);
  renderService.setErrorHandler(async (err, _req, res) => {
    if (res.statusCode !== 404) res.send(err.response);
  });
  await app.listen(PORT);
}

bootstrap();
