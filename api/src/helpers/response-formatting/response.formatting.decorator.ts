import { applyDecorators, Type, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, getSchemaPath } from '@nestjs/swagger';

import { FormattedResponse } from './response.formatting.dto';

export const GetSingleResource = <TModel extends Type>(
	model: TModel,
): PropertyDecorator => {
	return applyDecorators(
		HttpCode(HttpStatus.OK),
		ApiExtraModels(model, FormattedResponse),
		ApiResponse({
			status: HttpStatus.OK,
			description: 'Retrieves a ' + model.name + ' resource.',
			schema: {
				allOf: [
					{ $ref: getSchemaPath(FormattedResponse) },
					{
						properties: {
							data: {
								$ref: getSchemaPath(model),
							},
						},
					},
				],
			},
		}),
	);
};

export const GetMultipleResources = <TModel extends Type>(
	model: TModel,
): PropertyDecorator => {
	return applyDecorators(
		HttpCode(HttpStatus.OK),
		ApiExtraModels(model, FormattedResponse),
		ApiResponse({
			status: HttpStatus.OK,
			description: 'Retrieves a collection of ' + model.name + ' resource.',
			schema: {
				allOf: [
					{ $ref: getSchemaPath(FormattedResponse) },
					{
						properties: {
							data: {
								type: 'array',
								items: {
									$ref: getSchemaPath(model),
								},
							},
						},
					},
				],
			},
		}),
	);
};

export const PostSingleResource = <TModel extends Type>(
	model: TModel,
): PropertyDecorator => {
	return applyDecorators(
		HttpCode(HttpStatus.CREATED),
		ApiExtraModels(model, FormattedResponse),
		ApiResponse({
			status: HttpStatus.CREATED,
			description: 'Creates a ' + model.name + ' resource.',
			schema: {
				allOf: [
					{ $ref: getSchemaPath(FormattedResponse) },
					{
						properties: {
							data: {
								$ref: getSchemaPath(model),
							},
						},
					},
				],
			},
		}),
	);
};

export const PatchSingleResource = <TModel extends Type>(
	model: TModel,
): PropertyDecorator => {
	return applyDecorators(
		HttpCode(HttpStatus.OK),
		ApiExtraModels(model, FormattedResponse),
		ApiResponse({
			status: HttpStatus.OK,
			description: 'Updates a ' + model.name + ' resource.',
			schema: {
				allOf: [
					{ $ref: getSchemaPath(FormattedResponse) },
					{
						properties: {
							data: {
								$ref: getSchemaPath(model),
							},
						},
					},
				],
			},
		}),
	);
};

export const DeleteSingleResource = <TModel extends Type>(
	model: TModel,
): PropertyDecorator => {
	return applyDecorators(
		HttpCode(HttpStatus.NO_CONTENT),
		ApiResponse({
			status: HttpStatus.NO_CONTENT,
			description: 'Deletes a ' + model.name + ' resource.',
		}),
	);
};
