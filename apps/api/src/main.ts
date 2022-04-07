import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

const configureSwagger = (app) => {
  const options = new DocumentBuilder()
    .setTitle('While Hungry')
    .setDescription('REST API')
    .setVersion('1.0')
    .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // enable cors origin between apps
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  configureSwagger(app);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
