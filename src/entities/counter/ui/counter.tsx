import {Button} from 'shared/ui/button/button';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {counterActions} from '../model/slice/counter-slice';
import {getCounterValue} from '../model/selectors/get-counter-value/get-counter-value';

export const Counter = () => {
	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);
	const {t} = useTranslation();

	const increment = () => {
		dispatch(counterActions.increment());
	};

	const decrement = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<div>
			<h1 data-testid="value-title">{counterValue}</h1>
			<Button onClick={increment} data-testid="increment-btn">
				{t('increment')}
			</Button>
			<Button data-testid="decrement-btn" onClick={decrement}>
				{t('decrement')}
			</Button>
		</div>
	);
};
