import { Entity, Column } from 'typeorm';
import {
	IsString,
	IsNumber,
	IsDate,
	IsBoolean,
	IsNotEmpty,
} from 'class-validator';
import { Transform } from 'class-transformer';
import Decimal from 'decimal.js';

import { AbstractEntity } from 'src/helpers/abstract-entity/abstract.entity';
import { ToBoolean } from 'src/helpers/boolean-decorator/boolean.decorator';
import {
	DecimalToString,
	DecimalTransformer,
} from 'src/helpers/decimal-transformer/decimal.transformer';

@Entity({
	name: 'expenses',
})
export class Expense extends AbstractEntity {
	@Column()
	@IsString()
	@IsNotEmpty()
	name!: string;

	@Column({
		type: 'decimal',
		precision: 5,
		scale: 2,
		transformer: new DecimalTransformer(),
	})
	@Transform(({ value }) => DecimalToString(value), { toPlainOnly: true })
	@IsNumber()
	@IsNotEmpty()
	amount!: Decimal;

	@Column({ type: 'timestamp' })
	@IsDate()
	@IsNotEmpty()
	date!: Date;

	@Column({ type: 'boolean', default: false })
	@IsBoolean()
	@ToBoolean()
	isRecurrent?: boolean;
}
