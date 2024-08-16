import {useState} from 'react';
import {classNames} from 'shared/lib/classnames/classNames';
import {LangSwitcher} from 'shared/ui/lang-switcher/lang-switcher';
import {ThemeSwitcher} from 'shared/ui/theme-switcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
			<button type='button' onClick={onToggle}>
				toggle
			</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};
