import { customAlphabet } from 'nanoid';

import { Print } from './print.types';

const createNumericSuffix = customAlphabet('0123456789', 6);

export const createPrint = (image: string, titleKey: string, cta: string): Print => ({
	id: `${titleKey}-${createNumericSuffix()}`,
	image,
	titleKey,
	cta
});
