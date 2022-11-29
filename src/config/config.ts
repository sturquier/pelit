import { version } from '../../package.json';
import { Config, Env } from './config.interface';
import { getDatabaseConfig } from './database/database.config';

export default (): Config => ({
	port: Number.parseInt(process.env.APP_PORT || ''),
	version,
	env: process.env.APP_ENV as unknown as Env,
	databaseConfig: getDatabaseConfig(),
});
