import typescript from '@rollup/plugin-typescript';
// import packageJson from './package.json';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {babel} from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

export default {
	external: ['axios', 'jsonwebtoken'],
	input: ['src/index.ts', 'src/token.ts', 'src/utils.ts'],
	plugins: [
		nodeResolve({
			extensions: ['.ts', '.mjs', '.js', '.json', '.node'],
		}),
		commonjs(),
		typescript({compilerOptions: {module: 'esnext'}}),
		babel({
			babelHelpers: 'bundled',
			exclude: 'node_modules/**',
		}),
		terser(),
		json()
	],
	output: {
		dir: './dist',
		format: 'cjs',
		sourcemap: true
	}
};

// output: [
// 	{
// 		file: packageJson.main,
// 		format: 'cjs',
// 		sourcemap: true,
// 	},
// 	{
// 		file: packageJson.module,
// 		format: 'esm',
// 		sourcemap: true,
// 	},
// ]