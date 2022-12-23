import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Entity, Column, ManyToOne } from 'typeorm';
import {
	IsString,
	IsEnum,
	IsNumber,
	IsDate,
	IsBoolean,
	IsNotEmpty,
} from 'class-validator';
import { Transform } from 'class-transformer';

import { AbstractEntity } from '../../helpers/abstract-entity/abstract.entity';
import { ToBoolean } from '../../helpers/boolean-decorator/boolean.decorator';
import {
	DecimalToString,
	DecimalTransformer,
} from '../../helpers/decimal-transformer/decimal.transformer';
import { Category } from '../categories/categories.entity';

export enum ExpenseType {
	EXPENSE = 'expense',
	INCOME = 'income',
}

@Entity({
	name: 'expenses',
})
export class Expense extends AbstractEntity {
	@Column()
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	name!: string;

	@Column({ nullable: true })
	@IsString()
	@ApiPropertyOptional()
	description?: string;

	@Column({ enum: ExpenseType })
	@IsEnum(ExpenseType)
	@IsNotEmpty()
	@ApiProperty({ enum: ExpenseType })
	type!: ExpenseType;

	@Column({
		type: 'decimal',
		precision: 5,
		scale: 2,
		transformer: new DecimalTransformer(),
	})
	@Transform(({ value }) => DecimalToString(value), { toPlainOnly: true })
	@IsNumber()
	@IsNotEmpty()
	@ApiProperty()
	amount!: number;

	@Column({ type: 'timestamp' })
	@IsDate()
	@IsNotEmpty()
	@ApiProperty()
	date!: Date;

	@Column({ type: 'boolean', default: false })
	@IsBoolean()
	@ToBoolean()
	@ApiPropertyOptional()
	isRecurrent?: boolean;

	@ManyToOne(() => Category, (category) => category.expenses)
	category!: Category;
}
