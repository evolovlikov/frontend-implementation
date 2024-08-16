import webpack from 'webpack';
import {BuildOptions} from './types/config';
import {buildPlugins} from './build-plugins';
import {buildLoaders} from './build-loaders';
import {buildResolvers} from './build-resolvers';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {paths, mode} = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
	};
}
