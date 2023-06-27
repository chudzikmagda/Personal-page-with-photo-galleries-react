import React, { lazy, ReactElement, Suspense } from 'react';
import Spinner from '../../components/ui-elements/Spinner/Spinner';

const useLazyLoadRoute = (componentName: string): ReactElement => {
	const LazyComponent = lazy(() => import(`./../../components/pages/${componentName}/${componentName}.tsx`));

	return (
		<Suspense fallback={<Spinner />}>
			<LazyComponent />
		</Suspense>
	);
};

export default useLazyLoadRoute;
