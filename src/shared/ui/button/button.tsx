import {classNames} from 'shared/lib/classnames/classNames';
import cls from './button.module.scss';
import {ButtonHTMLAttributes, FC} from 'react';

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
	const {className, children, theme, ...otherProps} = props;

	return (
		<button className={classNames(cls.button, {[cls[theme]]: true}, [className])} {...otherProps}>
			{children}
		</button>
	);
};
