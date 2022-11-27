import { Config, Env } from './config.interface';
import { version } from '../../package.json';

export default (): Config => ({
	port: Number.parseInt(process.env.APP_PORT || ''),
	version,
	env: process.env.APP_ENV as unknown as Env,
});
