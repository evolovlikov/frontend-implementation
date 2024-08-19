import {useState} from 'react';
import {classNames} from 'shared/lib/classnames/classNames';
import {Button, ButtonTheme} from 'shared/ui/button/button';
import {useTranslation} from 'react-i18next';
import {Modal} from 'shared/ui/modal/modal';
import cls from './navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
	const {t} = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

	const onToggleModal = () => {
		setIsAuthModal(!isAuthModal);
	};

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
				{t('Войти')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				{t(
					`Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
					Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus 
					quis saepe sunt totam.`,
				)}
			</Modal>
		</div>
	);
};
