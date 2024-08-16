import {Link} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from 'shared/lib/classnames/classNames';
import {useTheme} from './providers/theme-provider';
import {AppRouter} from './providers/router';
import {Navbar} from 'widgets/navbar';

const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
			<button onClick={toggleTheme}>TOGGLE</button>
		</div>
	);
};

export default App;
