import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class FormattedResponse<T> {
	@ApiProperty({
		description: 'The HTTP status code.',
	})
	readonly statusCode!: number;

	@ApiPropertyOptional({
		description: 'The HTTP error.',
	})
	readonly error?: string;

	@ApiPropertyOptional({
		description: 'A description of the HTTP error.',
	})
	readonly message?: string;

	@ApiPropertyOptional({
		description: 'A single object containing the requested resource.',
	})
	readonly data?: T;

	constructor(data: T) {
		this.data = data;
	}
}
