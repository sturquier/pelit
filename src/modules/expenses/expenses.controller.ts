import { Get, Post, Controller, Render, Body, Redirect } from '@nestjs/common';
import { DeepPartial } from 'typeorm';

import { Expense } from './expenses.entity';
import { ExpensesService } from './expenses.service';

@Controller('expenses/')
export class ExpensesController {
	constructor(private readonly expensesService: ExpensesService) {}

	@Get()
	@Render('expenses/list-expenses.pug')
	async listExpenses(): Promise<{ expenses: Expense[] }> {
		const expenses = await this.expensesService.findAll();

		return { expenses };
	}

	@Post()
	@Redirect('expenses')
	async createExpense(
		@Body() expensePayload: DeepPartial<Expense>,
	): Promise<Expense> {
		return this.expensesService.create(expensePayload);
	}
}
