import {
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
} from 'typeorm';
import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export abstract class AbstractEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	@IsString()
	@IsNotEmpty()
	id!: string;

	@CreateDateColumn({ type: 'timestamp' })
	@IsDate()
	@IsNotEmpty()
	createdAt!: Date;

	@UpdateDateColumn({ type: 'timestamp' })
	@IsDate()
	@IsNotEmpty()
	updatedAt!: Date;
}
