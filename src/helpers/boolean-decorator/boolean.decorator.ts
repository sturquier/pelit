import { Transform } from 'class-transformer';

import { AbstractEntity } from '../abstract-entity/abstract.entity';

const ToBoolean = (): ((target: AbstractEntity, key: string) => void) => {
	const toPlain: PropertyDecorator = Transform(
		({ value }) => {
			return value;
		},
		{
			toPlainOnly: true,
		},
	);
	const toClass = (target: AbstractEntity, key: string): void => {
		return Transform(
			({ obj }) => {
				return valueToBoolean(obj[key]);
			},
			{
				toClassOnly: true,
			},
		)(target, key);
	};
	return function (target: AbstractEntity, key: string): void {
		toPlain(target, key);
		toClass(target, key);
	};
};

const valueToBoolean = (value: boolean | string): boolean | undefined => {
	if (value === null || value === undefined) {
		return undefined;
	}
	if (typeof value === 'boolean') {
		return value;
	}
	if (['true', 'on', 'yes', '1'].includes(value.toLowerCase())) {
		return true;
	}
	if (['false', 'off', 'no', '0'].includes(value.toLowerCase())) {
		return false;
	}
	return undefined;
};

export { ToBoolean };
