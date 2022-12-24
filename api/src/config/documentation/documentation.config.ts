import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';

import { Config } from '../config.interface';

const buildOptions = (config: Config): Omit<OpenAPIObject, 'paths'> =>
	new DocumentBuilder()
		.setTitle('Pelit API')
		.setDescription("Pelit API's documentation")
		.setVersion(config.version)
		.build();

export const createDocumentation = (
	app: NestExpressApplication,
	config: Config,
): void => {
	const document = SwaggerModule.createDocument(app, buildOptions(config));

	writeFileSync('./swagger-spec.json', JSON.stringify(document));

	SwaggerModule.setup('', app, document, {
		customfavIcon: '/logo.svg',
		customSiteTitle: 'Pelit API',
		swaggerOptions: {
			tagsSorter: 'alpha',
			operationsSorter: 'alpha',
		},
	});
};
