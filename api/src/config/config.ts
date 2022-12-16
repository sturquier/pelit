import { version } from '../../package.json';
import { Config, Env } from './config.interface';
import { getDatabaseConfig } from './database/database.config';

export default (): Config => ({
	port: Number.parseInt(process.env.API_PORT || ''),
	version,
	env: process.env.API_ENV as unknown as Env,
	databaseConfig: getDatabaseConfig(),
});
