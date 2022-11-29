import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Expense } from './expenses.entity';

@Injectable()
export class ExpensesService {
	constructor(
		@InjectRepository(Expense)
		private expensesRepository: Repository<Expense>,
	) {}

	public async findAll(): Promise<Expense[]> {
		return this.expensesRepository.find();
	}
}
