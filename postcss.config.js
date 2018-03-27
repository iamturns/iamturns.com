module.exports = {
	plugins: [
		require('postcss-cssnext'),
		require('postcss-import'),
		require('postcss-url')({ url: 'rebase' }),
		require('postcss-mixins'),
		require('postcss-nested'),
		require('tailwindcss')('./tailwind.js'),
	],
};
