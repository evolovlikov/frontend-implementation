import {Modal} from 'shared/ui/modal/modal';
import {classNames} from 'shared/lib/classnames/classNames';
import {Suspense} from 'react';
import {Loader} from 'shared/ui/loader/loader';
import {LoginFormAsync} from '../login-form/login-form.async';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = ({className, isOpen, onClose}: LoginModalProps) => (
	<Modal className={classNames('', {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
		<Suspense fallback={<Loader />}>
			<LoginFormAsync />
		</Suspense>
	</Modal>
);
