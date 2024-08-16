import HTMLWebpackPlugin from 'html-webpack-plugin';
import {ProgressPlugin, DefinePlugin} from 'webpack';
import {BuildOptions} from './types/config';

export function buildPlugins({paths, isDev}: BuildOptions) {
	return [
		new ProgressPlugin(),
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
	];
}
