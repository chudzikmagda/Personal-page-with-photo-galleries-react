import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BreadcrumbItem } from './models/breadcrumbs.models';

export function useBreadcrumbs(baseKey: string): BreadcrumbItem[] {
	const { t } = useTranslation();
	const { pathname } = useLocation();

	const segments = pathname.split('/').filter(Boolean);

	return [
		{ label: t(`${baseKey}.breadcrumbs.start`), path: '/' },
		...segments.map((segment, index) => {
			const label = t(`${baseKey}.breadcrumbs.${segment}`);
			const path = '/' + segments.slice(0, index + 1).join('/');
			return { label, path };
		})
	];
}
