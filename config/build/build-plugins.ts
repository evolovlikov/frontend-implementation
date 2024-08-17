import HTMLWebpackPlugin from 'html-webpack-plugin';
import {ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin} from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
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
		new HotModuleReplacementPlugin(),
		// Анализ бандла
		new BundleAnalyzerPlugin({
			openAnalyzer: false,
		}),
	];
}
