import {Configuration as WebpackConfiguration} from 'webpack';
import {Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server';

export type BuildMode = 'production' | 'development';

export interface BuildPaths {
	entry: string;
	build: string;
	html: string;
}

export interface BuildEnv {
	mode: BuildMode;
	port: number;
}

export interface BuildOptions {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
}

export interface Configuration extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration;
}
