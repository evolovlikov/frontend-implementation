import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/store-provider';
import {getCounterValue} from './get-counter-value';

describe('getCounterValue.test', () => {
	test('', () => {
		const state: DeepPartial<StateSchema> = {
			counter: {value: 10},
		};
		expect(getCounterValue(state as StateSchema)).toEqual(10);
	});
});