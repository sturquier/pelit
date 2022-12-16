import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

export const buildAssetsDirectory = (app: NestExpressApplication): void => {
	app.useStaticAssets(join(__dirname, '..', '..', '..', '..', 'public'));
};
