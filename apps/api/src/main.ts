import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import session from 'express-session';

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

  // set api prefix
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // set http headers to prevent security vulnerabilites
  app.use(helmet({
    crossOriginResourcePolicy: false,
  }
  ));

  // enable cors origin between apps
  app.enableCors(); 

  // protection against csurf attacks
  app.use(cookieParser());
  app.use(
    session({
      secret: 'ultrasecresessionpassword',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(csurf());
  app.use('*', function (req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken())
  })

  // configure swagger for api endpoints documentation
  configureSwagger(app);
  const port = process.env.PORT || 3000;

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
