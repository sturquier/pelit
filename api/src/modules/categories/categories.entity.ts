import { Entity, Column, OneToMany } from 'typeorm';
import { IsString, IsNotEmpty } from 'class-validator';

import { AbstractEntity } from '../../helpers/abstract-entity/abstract.entity';
import { Expense } from '../expenses/expenses.entity';

@Entity({
	name: 'categories',
})
export class Category extends AbstractEntity {
	@Column()
	@IsString()
	@IsNotEmpty()
	name!: string;

	@OneToMany(() => Expense, (expense) => expense.category)
	expenses!: Expense[];
}
