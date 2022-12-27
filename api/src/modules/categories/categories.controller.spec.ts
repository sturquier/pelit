import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
	MockType,
	repositoryMockFactory,
} from '../../../test/mocks/helpers/repository.mock';
import { categoriesMock } from '../../../test/mocks/entities/categories.mock';
import { FormattedResponseService } from '../../helpers/response-formatting/response.formatting.service';
import { CategoriesController } from './categories.controller';
import { Category } from './categories.entity';
import { CategoriesService } from './categories.service';

describe('CategoriesController', () => {
	let categoriesController: CategoriesController;
	let categoriesService: CategoriesService;
	let categoriesRepositoryMock: MockType<Repository<Category>>;

	beforeEach(async () => {
		const moduleRef: TestingModule = await Test.createTestingModule({
			controllers: [CategoriesController],
			providers: [
				CategoriesService,
				FormattedResponseService,
				{
					provide: getRepositoryToken(Category),
					useFactory: repositoryMockFactory,
				},
			],
		}).compile();

		categoriesService = moduleRef.get<CategoriesService>(CategoriesService);
		categoriesController =
			moduleRef.get<CategoriesController>(CategoriesController);
		categoriesRepositoryMock = moduleRef.get(getRepositoryToken(Category));
	});

	describe('findAll', () => {
		it('should return an array of categories', async () => {
			categoriesRepositoryMock.find?.mockReturnValue(categoriesMock);

			expect(await categoriesService.findAll()).toBe(categoriesMock);
			expect(await categoriesController.findAll()).toEqual({
				statusCode: HttpStatus.OK,
				data: categoriesMock,
			});

			expect(categoriesRepositoryMock.find).toHaveBeenCalled();
		});
	});
});
