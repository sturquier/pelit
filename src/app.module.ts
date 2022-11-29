import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import configuration from './config/config';
import { Config } from './config/config.interface';

import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ExpensesModule } from './modules/expenses/expenses.module';

@Module({
	providers: [
		{
			provide: APP_INTERCEPTOR,
			useClass: ClassSerializerInterceptor,
		},
	],
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration],
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (
				configService: ConfigService,
			): Promise<TypeOrmModuleOptions> => {
				const config: Config = configService['internalConfig'];

				return {
					...config.databaseConfig,
				} as TypeOrmModuleOptions;
			},
		}),
		DashboardModule,
		ExpensesModule,
	],
})
export class AppModule {}
