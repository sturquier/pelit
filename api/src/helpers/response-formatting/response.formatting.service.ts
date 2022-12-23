import { HttpStatus, Injectable } from '@nestjs/common';
import { FormattedResponse } from './response.formatting.dto';

@Injectable()
export class FormattedResponseService {
	public getSingle<T>(data: T): FormattedResponse<T> {
		const response: FormattedResponse<T> = {
			statusCode: HttpStatus.OK,
			data,
		};

		return response;
	}

	public getMultiple<T>(data: T[]): FormattedResponse<T[]> {
		const response: FormattedResponse<T[]> = {
			statusCode: HttpStatus.OK,
			data,
		};

		return response;
	}

	public createSingle<T>(data: T): FormattedResponse<T> {
		const response: FormattedResponse<T> = {
			statusCode: HttpStatus.CREATED,
			data,
		};

		return response;
	}

	public patchSingle<T>(data: T): FormattedResponse<T> {
		const response: FormattedResponse<T> = {
			statusCode: HttpStatus.OK,
			data,
		};

		return response;
	}
}
