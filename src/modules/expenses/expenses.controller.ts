import { Get, Controller, Render } from '@nestjs/common';

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
}
