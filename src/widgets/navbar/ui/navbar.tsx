import {classNames} from 'shared/lib/classnames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/app-link/app-link';
import {ThemeSwitcher} from 'shared/ui/theme-switcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({className}: NavbarProps) => (
		<div className={classNames(cls.navbar, {}, [className])}>
			<ThemeSwitcher />
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
					Главная
				</AppLink>
				<AppLink theme={AppLinkTheme.RED} to="/about">
					О сайте
				</AppLink>
			</div>
		</div>
	);
