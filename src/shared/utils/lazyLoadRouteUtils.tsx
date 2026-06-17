import React, { lazy, ReactElement, Suspense } from 'react';

import Spinner from '../../components/ui-elements/Spinner/Spinner';

const lazyLoadRoute = (componentPath: string): ReactElement => {
	const LazyComponent = lazy(() => import(`./../../components/pages/${componentPath}`));

	return (
		<Suspense fallback={<Spinner />}>
			<LazyComponent />
		</Suspense>
	);
};

export default lazyLoadRoute;
