/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {
	createPageFromNode,
	getPages,
	processPageNode,
} = require('./devtools/gatsby/utils');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
	if (node.internal.type === 'JavascriptFrontmatter') {
		processPageNode(node, getNode, boundActionCreators);
	}
};

exports.createPages = ({ graphql, boundActionCreators }) => {
	return new Promise((resolve, reject) => {
		getPages(graphql).then(result => {
			if (result.errors) {
				console.log(result.errors);
				reject(result.errors);
				return;
			}

			result.data.allJavascriptFrontmatter.edges.map(edge =>
				createPageFromNode(edge.node, boundActionCreators.createPage),
			);

			resolve();
		});
	});
};
