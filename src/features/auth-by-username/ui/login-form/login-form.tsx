import {classNames} from 'shared/lib/classnames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/button/button';
import {Input} from 'shared/ui/input/input';
import {useDispatch, useSelector} from 'react-redux';
import {memo, useCallback} from 'react';
import {Text, TextTheme} from 'shared/ui/text/text';
import {loginByUsername} from '../../model/services/login-by-username/login-by-username';
import {loginActions} from '../../model/slice/login-slice';
import cls from './login-form.module.scss';
import {getLoginState} from '../../model/selectors/get-login-state/get-login-state';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = memo(({className}: LoginFormProps) => {
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const {username, password, error, isLoading} = useSelector(getLoginState);

	console.log('error', error);

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value));
		},
		[dispatch],
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch],
	);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({username, password}));
	}, [dispatch, password, username]);

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Text title={t('Форма авторизации')} />
			{error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
			<Input
				autofocus
				type="text"
				className={cls.input}
				placeholder={t('Введите username')}
				onChange={onChangeUsername}
				value={username}
			/>
			<Input
				type="text"
				className={cls.input}
				placeholder={t('Введите пароль')}
				onChange={onChangePassword}
				value={password}
			/>
			<Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
				{t('Войти')}
			</Button>
		</div>
	);
});
