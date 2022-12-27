import { Repository } from 'typeorm';

export type MockType<T> = {
	[P in keyof T]?: jest.Mock<object>;
};

export const repositoryMockFactory: () => MockType<Repository<object>> =
	jest.fn(() => ({
		find: jest.fn().mockReturnThis(),
		save: jest.fn().mockReturnThis(),
		delete: jest.fn().mockReturnThis(),
	}));
