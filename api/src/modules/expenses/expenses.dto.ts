import { OmitType } from '@nestjs/swagger';

import { Expense } from './expenses.entity';

export class ExpensePayload extends OmitType(Expense, [
	'id',
	'createdAt',
	'updatedAt',
] as const) {}
