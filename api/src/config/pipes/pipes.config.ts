import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

import { Config, Env } from '../config.interface';

export const buildValidationPipe = (
	app: NestExpressApplication,
	config: Config,
): void => {
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			transformOptions: { enableImplicitConversion: true },
			whitelist: true,
			enableDebugMessages: config.env === Env.DEVELOPMENT,
			forbidUnknownValues: true,
			forbidNonWhitelisted: true,
		}),
	);
};
