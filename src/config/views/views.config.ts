import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { handlebars } from 'hbs';
import { join } from 'path';

export const setViewEngine = (app: NestFastifyApplication): void => {
	app.setViewEngine({
		engine: {
			handlebars,
		},
		templates: join(__dirname, '..', 'views'),
	});
};
