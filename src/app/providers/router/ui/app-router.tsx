import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config/route-config/route-config';
import {PageLoader} from 'shared/ui/page-loader/page-loader';

const AppRouter = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<Routes>
			{Object.values(routeConfig).map(({element, path}) => (
				<Route key={path} path={path} element={<Suspense fallback={<PageLoader />}>{element}</Suspense>} />
			))}
		</Routes>
	</Suspense>
);

export default AppRouter;
