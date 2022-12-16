import { Get, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Category } from './categories.entity';
import { CategoriesService } from './categories.service';

@ApiTags('Categories')
@Controller('categories/')
export class CategoriesController {
	constructor(private readonly categoriesService: CategoriesService) {}

	@Get()
	async findAll(): Promise<Category[]> {
		return this.categoriesService.findAll();
	}
}
