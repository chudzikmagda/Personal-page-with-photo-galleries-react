import React, { lazy, ReactElement, Suspense } from 'react';

const useLazyLoadRoute = (componentName: string): ReactElement => {
	const LazyComponent = lazy(() => import(`./../../components/pages/${componentName}/${componentName}.tsx`));

	return (
		<Suspense fallback={<h1>Component is loading....</h1>}>
			<LazyComponent />
		</Suspense>
	);
};

export default useLazyLoadRoute;
