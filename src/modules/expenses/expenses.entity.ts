import { Entity, Column } from 'typeorm';
import { IsNumber, IsNotEmpty } from 'class-validator';

import { AbstractEntity } from 'src/helpers/abstract-entities/abstract-entities.entity';

@Entity({
	name: 'expenses',
})
export class Expense extends AbstractEntity {
	@Column()
	@IsNumber()
	@IsNotEmpty()
	amount!: number;
}
