import { Get, Post, Delete, Controller, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeepPartial } from 'typeorm';

import { Expense } from './expenses.entity';
import { ExpensesService } from './expenses.service';

@ApiTags('Expenses')
@Controller('expenses/')
export class ExpensesController {
	constructor(private readonly expensesService: ExpensesService) {}

	@Get()
	async findAll(): Promise<Expense[]> {
		return this.expensesService.findAll();
	}

	@Post()
	async create(@Body() expensePayload: DeepPartial<Expense>): Promise<Expense> {
		return this.expensesService.create(expensePayload);
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<void> {
		return this.expensesService.delete(id);
	}
}
