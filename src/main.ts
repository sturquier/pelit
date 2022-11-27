import { NestFactory } from '@nestjs/core';
import {
	NestFastifyApplication,
	FastifyAdapter,
} from '@nestjs/platform-fastify';
import { join } from 'path';
import { handlebars } from 'hbs';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter(),
	);

	app.useStaticAssets({
		root: join(__dirname, '..', 'public'),
	});

	app.setViewEngine({
		engine: {
			handlebars,
		},
		templates: join(__dirname, '..', 'views'),
	});

	await app.listen(3000);
}
bootstrap();
