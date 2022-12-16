import { DatabaseConfig } from './database.config.interface';

export const getDatabaseConfig = (): DatabaseConfig => {
	return {
		type: 'postgres',
		host: process.env.DB_HOST || '',
		port: Number.parseInt(process.env.DB_PORT || ''),
		database: process.env.DB_NAME || '',
		username: process.env.DB_USERNAME || '',
		password: process.env.DB_PASSWORD || '',
		entities: ['dist/**/*.entity{.ts,.js}'],
		subscribers: ['dist/**/*.subscriber{.ts,.js}'],
		synchronize: true,
	};
};
