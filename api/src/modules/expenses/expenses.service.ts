import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ExpensePayload } from './expenses.dto';
import { Expense } from './expenses.entity';

@Injectable()
export class ExpensesService {
	constructor(
		@InjectRepository(Expense)
		private expensesRepository: Repository<Expense>,
	) {}

	public async findAll(): Promise<Expense[]> {
		return this.expensesRepository.find({
			relations: {
				category: true,
			},
		});
	}

	public async create(expensePayload: ExpensePayload): Promise<Expense> {
		return this.expensesRepository.save(expensePayload);
	}

	public async delete(id: string): Promise<void> {
		await this.expensesRepository.delete(id);
	}
}
