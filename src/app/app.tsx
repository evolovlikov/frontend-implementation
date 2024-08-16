import './styles/index.scss';
import {classNames} from 'shared/lib/classnames/classNames';
import {useTheme} from './providers/theme-provider';
import {AppRouter} from './providers/router';
import {Navbar} from 'widgets/navbar';
import {Sidebar} from 'widgets/sidebar';
import { Suspense } from 'react';

const App = () => {
	const {theme, toggleTheme} = useTheme();

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
