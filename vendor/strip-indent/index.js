// https://github.com/sindresorhus/strip-indent
// Why is this here? /docs/es6-deps.md

export default function stripIndent(str) {
	const match = str.match(/^[ \t]*(?=\S)/gm);

	if (!match) {
		return str;
	}

	// TODO: use spread operator when targeting Node.js 6
	const indent = Math.min.apply(Math, match.map(x => x.length)); // eslint-disable-line
	const re = new RegExp(`^[ \\t]{${indent}}`, 'gm');

	return indent > 0 ? str.replace(re, '') : str;
}
