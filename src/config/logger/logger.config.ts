import { Logger } from '@nestjs/common';

import { Config } from 'src/config/config.interface';

export const logApplication = (config: Config): void => {
	Logger.log(
		`Starting server on port ${config.port} | version ${config.version} | env ${config.env}...`,
	);
};
