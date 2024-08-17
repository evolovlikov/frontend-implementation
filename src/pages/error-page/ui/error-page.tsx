import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classnames/classNames';
import {Button} from 'shared/ui/button/button';
import cls from './error-page.module.scss';

interface ErrorPageProps {
	className?: string;
}

export const ErrorPage = ({className}: ErrorPageProps) => {
	const {t} = useTranslation();

	const reloadPage = () => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};

	return (
		<div className={classNames(cls.errorPage, {}, [className])}>
			<p>{t('Произошла непредвиденная ошибка')}</p>
			<Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
		</div>
	);
};
