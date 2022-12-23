import { Get, Post, Delete, Controller, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
	DeleteSingleResource,
	GetMultipleResources,
	PostSingleResource,
} from '../../helpers/response-formatting/response.formatting.decorator';
import { FormattedResponse } from '../../helpers/response-formatting/response.formatting.dto';
import { FormattedResponseService } from '../../helpers/response-formatting/response.formatting.service';
import { ExpensePayload } from './expenses.dto';
import { Expense } from './expenses.entity';
import { ExpensesService } from './expenses.service';

@ApiTags('Expenses')
@Controller('expenses/')
export class ExpensesController {
	constructor(
		private readonly formattedResponseService: FormattedResponseService,
		private readonly expensesService: ExpensesService,
	) {}

	@Get()
	@GetMultipleResources(Expense)
	async findAll(): Promise<FormattedResponse<Expense[]>> {
		return this.formattedResponseService.getMultiple(
			await this.expensesService.findAll(),
		);
	}

	@Post()
	@PostSingleResource(Expense)
	async create(
		@Body() expensePayload: ExpensePayload,
	): Promise<FormattedResponse<Expense>> {
		return this.formattedResponseService.createSingle(
			await this.expensesService.create(expensePayload),
		);
	}

	@Delete(':id')
	@DeleteSingleResource(Expense)
	async delete(@Param('id') id: string): Promise<void> {
		return this.expensesService.delete(id);
	}
}
