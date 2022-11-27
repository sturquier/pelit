import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
	NestFastifyApplication,
	FastifyAdapter,
} from '@nestjs/platform-fastify';

import { Config } from './config/config.interface';
import { buildAssetsDirectory } from './config/assets/assets.config';
import { setViewEngine } from './config/views/views.config';
import { buildValidationPipe } from './config/pipes/pipes.config';
import { logApplication } from './config/logger/logger.config';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter(),
	);

	const config: Config =
		app.get<ConfigService>(ConfigService)['internalConfig'];

	if (!config) {
		throw new Error('Config was not found');
	}

	buildAssetsDirectory(app);

	setViewEngine(app);

	buildValidationPipe(app, config);

	logApplication(config);

	await app.listen(config.port);
}
bootstrap();
