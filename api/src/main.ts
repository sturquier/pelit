import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { Config } from './config/config.interface';
import { buildAssetsDirectory } from './config/assets/assets.config';
import { buildValidationPipe } from './config/pipes/pipes.config';
import { createDocumentation } from './config/documentation/documentation.config';
import { logApplication } from './config/logger/logger.config';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	const config: Config =
		app.get<ConfigService>(ConfigService)['internalConfig'];

	if (!config) {
		throw new Error('Config was not found');
	}

	buildAssetsDirectory(app);

	buildValidationPipe(app, config);

	createDocumentation(app, config);

	logApplication(config);

	await app.listen(config.port);
}
bootstrap();
