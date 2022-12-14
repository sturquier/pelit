import {
	Get,
	Post,
	Delete,
	Controller,
	Render,
	Redirect,
	Body,
	Param,
} from '@nestjs/common';
import { DeepPartial } from 'typeorm';

import { Category } from 'src/modules/categories/categories.entity';
import { CategoriesService } from 'src/modules/categories/categories.service';
import { Expense, ExpenseType } from './expenses.entity';
import { ExpensesService } from './expenses.service';

@Controller('expenses/')
export class ExpensesController {
	constructor(
		private readonly expensesService: ExpensesService,
		private readonly categoriesService: CategoriesService,
	) {}

	@Get()
	@Render('expenses/list-expenses.pug')
	async listExpenses(): Promise<{
		expenses: Expense[];
		types: typeof ExpenseType;
		categories: Category[];
	}> {
		const expenses = await this.expensesService.findAll();
		const categories = await this.categoriesService.findAll();

		return { expenses, types: ExpenseType, categories };
	}

	@Post()
	@Redirect('expenses')
	async createExpense(
		@Body() expensePayload: DeepPartial<Expense>,
	): Promise<Expense> {
		return this.expensesService.create(expensePayload);
	}

	@Delete(':id')
	@Redirect('expenses')
	async deleteExpense(@Param('id') id: string): Promise<void> {
		return this.expensesService.deleteOne(id);
	}
}
