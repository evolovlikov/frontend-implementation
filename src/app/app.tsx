import './styles/index.scss';
import {classNames} from 'shared/lib/classnames/classNames';
import {Navbar} from 'widgets/navbar';
import {Sidebar} from 'widgets/sidebar';
import {Suspense} from 'react';
import {AppRouter} from './providers/router';
import {useTheme} from './providers/theme-provider';

const App = () => {
	const {theme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
