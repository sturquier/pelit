import { ApiProperty } from '@nestjs/swagger';
import {
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
} from 'typeorm';
import { IsNumber, IsDate, IsNotEmpty } from 'class-validator';

export abstract class AbstractEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	@IsNumber()
	@IsNotEmpty()
	@ApiProperty()
	id!: number;

	@CreateDateColumn({ type: 'timestamp' })
	@IsDate()
	@IsNotEmpty()
	@ApiProperty()
	createdAt!: Date;

	@UpdateDateColumn({ type: 'timestamp' })
	@IsDate()
	@IsNotEmpty()
	@ApiProperty()
	updatedAt!: Date;
}
