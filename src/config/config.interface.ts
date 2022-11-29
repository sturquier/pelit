import { DatabaseConfig } from './database/database.config.interface';

export interface Config {
	port: number;
	version: string;
	env: Env;
	databaseConfig: DatabaseConfig;
}

export enum Env {
	DEVELOPMENT = 'development',
	PRODUCTION = 'production',
}
