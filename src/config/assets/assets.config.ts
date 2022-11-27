import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { join } from 'path';

export const buildAssetsDirectory = (app: NestFastifyApplication): void => {
	app.useStaticAssets({
		root: join(__dirname, '..', 'public'),
	});
};
