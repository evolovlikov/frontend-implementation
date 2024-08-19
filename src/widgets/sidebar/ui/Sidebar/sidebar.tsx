import {classNames} from 'shared/lib/classnames/classNames';
import {useState} from 'react';
import {ThemeSwitcher} from 'shared/ui/theme-switcher';
import {LangSwitcher} from 'shared/ui/lang-switcher/lang-switcher';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/button/button';
import {useTranslation} from 'react-i18next';
import {AppLink, AppLinkTheme} from 'shared/ui/app-link/app-link';
import {RoutePath} from 'shared/config/route-config/route-config';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);
	const {t} = useTranslation();

	const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

	return (
		<div data-testid="sidebar" className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.L}
				square
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.items}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.item}>
					<MainIcon className={cls.icon} />
					<span className={cls.link}>{t('Главная')}</span>
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
					<AboutIcon className={cls.icon} />
					<span className={cls.link}>{t('О сайте')}</span>
				</AppLink>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} className={cls.lang} />
			</div>
		</div>
	);
};
