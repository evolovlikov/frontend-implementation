import HTMLWebpackPlugin from 'html-webpack-plugin';
import {ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import {BuildOptions} from './types/config';

export function buildPlugins({paths, isDev}: BuildOptions) {
	return [
		new ProgressPlugin(),
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
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
