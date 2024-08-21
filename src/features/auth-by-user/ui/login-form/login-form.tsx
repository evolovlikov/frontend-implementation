import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classnames/classNames';
import {Input} from 'shared/ui/input/input';
import {Button} from 'shared/ui/button/button';
import cls from './login-form.module.scss';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {
	const {t} = useTranslation();

	return (
		<div className={classNames(cls.loginForm, {}, [className])}>
			<Input autofocus type="text" className={cls.input} placeholder={t('Введите username')} />
			<Input type="text" className={cls.input} placeholder={t('Введите пароль')} />
			<Button className={cls.loginBtn}>{t('Войти')}</Button>
		</div>
	);
};
