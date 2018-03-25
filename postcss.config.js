module.exports = {
	plugins: [
		require('postcss-cssnext'),
		require('postcss-import'),
		require('postcss-nested'),
		require('postcss-url')({ url: 'rebase' }),
		require('tailwindcss')('./tailwind.js'),
	],
};
