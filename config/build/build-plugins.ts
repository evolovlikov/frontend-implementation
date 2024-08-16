import HTMLWebpackPlugin from 'html-webpack-plugin';
import {ProgressPlugin} from 'webpack';
import {BuildOptions} from './types/config';

export function buildPlugins({paths}: BuildOptions) {
	return [
		new ProgressPlugin(),
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
	];
}
