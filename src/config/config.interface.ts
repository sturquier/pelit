export interface Config {
	port: number;
	version: string;
	env: Env;
}

export enum Env {
	DEVELOPMENT = 'development',
	PRODUCTION = 'production',
}
