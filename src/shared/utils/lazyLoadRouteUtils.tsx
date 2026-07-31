import React, { ComponentType, lazy, ReactElement, Suspense } from 'react';

import Spinner from '../../components/ui-elements/Spinner/Spinner';

type LazyComponentLoader = () => Promise<{ default: ComponentType }>;

const lazyRouteElement = (loader: LazyComponentLoader): ReactElement => {
	const LazyComponent = lazy(loader);

	return (
		<Suspense fallback={<Spinner />}>
			<LazyComponent />
		</Suspense>
	);
};

export default lazyRouteElement;
