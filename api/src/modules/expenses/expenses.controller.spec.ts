import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
	MockType,
	repositoryMockFactory,
} from '../../../test/mocks/helpers/repository.mock';
import { expensesMock } from '../../../test/mocks/entities/expenses.mock';
import { FormattedResponseService } from '../../helpers/response-formatting/response.formatting.service';
import { ExpensesController } from './expenses.controller';
import { ExpensePayload } from './expenses.dto';
import { Expense } from './expenses.entity';
import { ExpensesService } from './expenses.service';

describe('ExpensesController', () => {
	let expensesController: ExpensesController;
	let expensesService: ExpensesService;
	let expensesRepositoryMock: MockType<Repository<Expense>>;

	beforeEach(async () => {
		const moduleRef: TestingModule = await Test.createTestingModule({
			controllers: [ExpensesController],
			providers: [
				ExpensesService,
				FormattedResponseService,
				{
					provide: getRepositoryToken(Expense),
					useFactory: repositoryMockFactory,
				},
			],
		}).compile();

		expensesService = moduleRef.get<ExpensesService>(ExpensesService);
		expensesController = moduleRef.get<ExpensesController>(ExpensesController);
		expensesRepositoryMock = moduleRef.get(getRepositoryToken(Expense));
	});

	describe('findAll', () => {
		it('should return an array of expenses', async () => {
			expensesRepositoryMock.find?.mockReturnValue(expensesMock);

			expect(await expensesService.findAll()).toBe(expensesMock);
			expect(await expensesController.findAll()).toEqual({
				statusCode: HttpStatus.OK,
				data: expensesMock,
			});

			expect(expensesRepositoryMock.find).toHaveBeenCalled();
		});
	});

	describe('create', () => {
		it('should return an expense', async () => {
			expensesRepositoryMock.save?.mockReturnValue(expensesMock[0]);

			expect(await expensesService.create(expensesMock[0])).toBe(
				expensesMock[0],
			);
			expect(await expensesController.create(expensesMock[0])).toEqual({
				statusCode: HttpStatus.CREATED,
				data: expensesMock[0],
			});

			expect(expensesRepositoryMock.save).toHaveBeenCalled();
		});
	});

	describe('delete', () => {
		it('should be resolved', async () => {
			expensesRepositoryMock.delete?.mockReturnValue(() => ({}));

			await expect(expensesService.delete('1')).resolves.toBeUndefined();
			await expect(expensesController.delete('1')).resolves.toBeUndefined();

			expect(expensesRepositoryMock.delete).toHaveBeenCalled();
		});
	});
});
