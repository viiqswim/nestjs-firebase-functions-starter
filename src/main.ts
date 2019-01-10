import * as functions from 'firebase-functions';
import * as express from 'express';
import { Express } from 'express';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;
const server: Express = express();

const startNestApplication = async (expressInstance: Express) => {
  const app = await NestFactory.create(AppModule, expressInstance);
  app.init();
}

startNestApplication(server);
exports.api = functions.https.onRequest(server);