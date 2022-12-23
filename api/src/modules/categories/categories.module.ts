import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FormattedResponseService } from 'src/helpers/response-formatting/response.formatting.service';
import { CategoriesController } from './categories.controller';
import { Category } from './categories.entity';
import { CategoriesService } from './categories.service';

@Module({
	imports: [TypeOrmModule.forFeature([Category])],
	controllers: [CategoriesController],
	providers: [CategoriesService, FormattedResponseService],
	exports: [CategoriesService],
})
export class CategoriesModule {}
