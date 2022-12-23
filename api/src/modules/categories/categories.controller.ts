import { Get, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GetMultipleResources } from '../../helpers/response-formatting/response.formatting.decorator';
import { FormattedResponse } from '../../helpers/response-formatting/response.formatting.dto';
import { FormattedResponseService } from '../../helpers/response-formatting/response.formatting.service';
import { Category } from './categories.entity';
import { CategoriesService } from './categories.service';

@ApiTags('Categories')
@Controller('categories/')
export class CategoriesController {
	constructor(
		private readonly formattedResponseService: FormattedResponseService,
		private readonly categoriesService: CategoriesService,
	) {}

	@Get()
	@GetMultipleResources(Category)
	async findAll(): Promise<FormattedResponse<Category[]>> {
		return this.formattedResponseService.getMultiple(
			await this.categoriesService.findAll(),
		);
	}
}
