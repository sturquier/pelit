import { Logger } from '@nestjs/common';

import { Config } from '../config.interface';

export const logApplication = (config: Config): void => {
	Logger.verbose(
		`Starting server on port ${config.port} | version ${config.version} | env ${config.env}...`,
	);
};
