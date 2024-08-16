import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {classNames} from 'shared/lib/classnames/classNames';
import {useTheme} from 'app/providers/theme-provider';
import {Theme} from 'app/providers/theme-provider/lib/theme-context';
import {Button, ThemeButton} from 'shared/ui/button/button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
	const {theme, toggleTheme} = useTheme();

	return (
		<Button theme={ThemeButton.CLEAR} className={classNames('', {}, [className])} onClick={toggleTheme}>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};
