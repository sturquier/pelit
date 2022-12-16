export interface DatabaseConfig {
	type: string;
	host: string;
	port: number;
	database: string;
	username: string;
	password: string;
	entities: string[];
	subscribers: string[];
	synchronize: boolean;
}
