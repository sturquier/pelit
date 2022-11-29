import { NestFastifyApplication } from '@nestjs/platform-fastify';
import * as pug from 'pug';
import { join } from 'path';

export const setViewEngine = (app: NestFastifyApplication): void => {
	app.setViewEngine({
		engine: {
			pug,
		},
		templates: join(__dirname, '..', '..', '..', 'views'),
	});
};
