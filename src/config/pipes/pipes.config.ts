import { ValidationPipe } from '@nestjs/common';
import { NestFastifyApplication } from '@nestjs/platform-fastify';

import { Config, Env } from 'src/config/config.interface';

export const buildValidationPipe = (
	app: NestFastifyApplication,
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
