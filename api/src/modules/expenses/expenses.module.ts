import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExpensesController } from './expenses.controller';
import { Expense } from './expenses.entity';
import { ExpensesService } from './expenses.service';

@Module({
	imports: [TypeOrmModule.forFeature([Expense])],
	controllers: [ExpensesController],
	providers: [ExpensesService],
	exports: [ExpensesService],
})
export class ExpensesModule {}
