import { NestFactory } from '@nestjs/core';
import { PORT } from '@shared/env';
import { RenderService } from 'nest-next';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { XmlInterceptor } from '@server/interceptors/xmlInterceptors';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new XmlInterceptor());
  const renderService = app.get(RenderService);
  renderService.setErrorHandler(async (err, _req, res) => {
    if (res.statusCode !== 404) res.send(err.response);
  });

  const config = new DocumentBuilder()
    .setTitle('Articles example')
    .setDescription('The articles API description')
    .setVersion('1.0')
    .addTag('articles')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
}

bootstrap();
