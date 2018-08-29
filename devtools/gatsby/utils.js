const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

function calculateNodeSlug(node, getNode) {
	if (node.frontmatter && node.frontmatter.slug) {
		return node.frontmatter.slug;
	}

	// Converts '/var/www/project/src/content/example/PageExample.jsx' to '/example/PageExample/'
	const filePath = createFilePath({ node, getNode });

	// Convert '/example/PageExample/' to '/example'
	const filePathParts = filePath.split("/");
	filePathParts.pop();
	filePathParts.pop();
	return filePathParts.join("/");
}

function processPageNode(node, getNode, boundActionCreators) {
	const nodePath = calculateNodeSlug(node, getNode);

	boundActionCreators.createNodeField({
		node,
		name: "slug",
		value: addTrailingSlash(nodePath),
	});
}

function addTrailingSlash(url) {
	return url.replace(/\/?$/, "/");
}

function getPages(graphql) {
	const query = `
		query GetPagesQuery {
			allJavascriptFrontmatter {
				edges {
					node {
						fileAbsolutePath
						fields {
							slug
						}
					}
				}
			}
		}
	`;

	return graphql(query);
}

function createPageFromNode(node, createPage) {
	const slug = node.fields.slug;

	createPage({
		path: slug,
		component: path.resolve(node.fileAbsolutePath),
		context: {
			slug,
		},
	});

	console.log(`Created page: ${slug}`);
}

module.exports = {
	createPageFromNode,
	getPages,
	processPageNode,
};
