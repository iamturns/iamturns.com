// @flow

import * as React from 'react';

import type { Footnote } from './Footnote';
import { generateFootnoteHash } from './Footnote';

type Props = {
	footnotes: Array<Footnote>,
};

const ContentDevStereotypeFootnotes = (props: Props) => (
	<div className="wysiwyg">
		<hr />
		<h2 className="h4">Footnotes</h2>
		<ol className="text-sm">
			{props.footnotes.map(footnote => (
				<li key={footnote.key} id={generateFootnoteHash(footnote)}>
					{footnote.node}
				</li>
			))}
		</ol>
	</div>
);

export default ContentDevStereotypeFootnotes;
