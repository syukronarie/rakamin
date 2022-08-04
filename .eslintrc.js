module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
		'plugin:react/jsx-runtime',
		'plugin:prettier/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				project: 'tsconfig.json',
			},
		},
	},
	plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y', 'react-hooks', 'prettier'],
	rules: {
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'import/no-unresolved': 'error',
		'import/extensions': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'react/function-component-definition': [
			2,
			{
				namedComponents: ['arrow-function', 'function-declaration'],
				unnamedComponents: 'arrow-function',
			},
		],
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'auto',
				singleQuote: true,
			},
		],
	},
};
