module.exports = {
	plugins: [
		// Sources
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "content",
				path: `${__dirname}/src/content/`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "assets",
				path: `${__dirname}/src/assets/`,
			},
		},
		// Transformers
		"gatsby-transformer-javascript-frontmatter",
		"gatsby-transformer-sharp",
		// Plugins
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
	],
};
