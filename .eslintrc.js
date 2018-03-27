module.exports = {
	env: {
		browser: true,
	},
	extends: [
		'airbnb',
		'plugin:flowtype/recommended',
		'prettier',
		'prettier/flowtype',
		'prettier/react',
	],
	plugins: ['flowtype'],
	settings: {
		// These modules confuse ESLint as they are imported from within Gatsby
		'import/core-modules': ['graphql', 'react'],
	},
	rules: {
		// Temporarily disabled valid anchor check: https://github.com/airbnb/javascript/pull/1648
		'jsx-a11y/anchor-is-valid': false,
		// Sometimes want to define <html> for <Helmet> without lang attribute
		'jsx-a11y/html-has-lang': false,
		// allow a.target="_blank"
		'react/jsx-no-target-blank': false,
		// Allow functions and classes to be defined after they are called for better flow in reading coe
		'no-use-before-define': [
			'error',
			{ functions: false, classes: false, variables: false },
		],
		// Sometimes you plan to have more exports later, but don't want to change import methods
		'import/prefer-default-export': false,
		// https://github.com/yannickcr/eslint-plugin-react/issues/1554
		// https://github.com/yannickcr/eslint-plugin-react/issues/1593
		'react/require-default-props': false,
		'react/default-props-match-prop-types': false,
		// Flow is terrible at figuring out which props are used and which are not used
		'react/no-unused-prop-types': false,
		// Bug: https://github.com/yannickcr/eslint-plugin-react/issues/1592
		'react/jsx-curly-brace-presence': [
			'error',
			{ props: 'ignore', children: 'never' },
		],
		// Use Emoji component instead (with accessibility built in)
		'jsx-a11y/accessible-emoji': false,
	},
};
