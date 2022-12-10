import { ValueTransformer } from 'typeorm';
import Decimal from 'decimal.js';

export class DecimalTransformer implements ValueTransformer {
	from(decimal?: string): Decimal | null {
		return decimal ? new Decimal(decimal) : null;
	}

	to(decimal?: Decimal): string | null {
		return decimal ? decimal.toString() : null;
	}
}

export const DecimalToString = (
	decimal?: Decimal,
): string | Decimal | undefined => decimal?.toFixed?.(2) || decimal;
