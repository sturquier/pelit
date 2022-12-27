import {
	Expense,
	ExpenseType,
} from '../../../src/modules/expenses/expenses.entity';
import { categoriesMock } from './categories.mock';

export const expensesMock = [
	{
		id: 1,
		name: 'Expense A',
		description: 'Lorem Ipsum',
		type: ExpenseType.EXPENSE,
		amount: 12.5,
		date: new Date(),
		category: categoriesMock[0],
	},
	{
		id: 2,
		name: 'Expense B',
		type: ExpenseType.INCOME,
		amount: 25,
		date: new Date(),
		isRecurrent: true,
		category: categoriesMock[1],
	},
	{
		id: 3,
		name: 'Expense C',
		type: ExpenseType.EXPENSE,
		amount: 37.5,
		date: new Date(),
		category: categoriesMock[2],
	},
] as Expense[];
