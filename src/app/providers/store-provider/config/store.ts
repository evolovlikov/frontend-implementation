import {configureStore} from '@reduxjs/toolkit';
import {counterReducer} from 'entities/counter';
import {userReducer} from 'entities/user';
import {loginReducer} from 'features/auth-by-username';
import {StateSchema} from './state-schema';

export function createReduxStore(initialState?: StateSchema) {
	const rootReducers = {
		counter: counterReducer,
		user: userReducer,
		loginForm: loginReducer,
	};

	return configureStore<StateSchema>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}
