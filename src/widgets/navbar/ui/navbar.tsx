import {useCallback, useState} from 'react';
import {classNames} from 'shared/lib/classnames/classNames';
import {Button, ButtonTheme} from 'shared/ui/button/button';
import {useTranslation} from 'react-i18next';
import {LoginModal} from 'features/auth-by-username';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuthData, userActions} from 'entities/user';
import cls from './navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
	const {t} = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
	const authData = useSelector(getUserAuthData);
	const dispatch = useDispatch();

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
				{t('Войти')}
			</Button>
			<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
		</div>
	);
};
