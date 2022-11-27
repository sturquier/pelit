import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';

import configuration from './config/config';

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
	],
})
export class AppModule {}
