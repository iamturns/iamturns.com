// @flow

import * as React from "react";

import type { Footnote } from "../../types/Footnote";
import { generateFootnoteHash } from "../../utils/footnote";

type Props = {
	footnotes: Array<Footnote>,
};

const LayoutContentFootnotes = (props: Props) => {
	if (props.footnotes.length === 0) {
		return null;
	}
	return (
		<div className="wysiwyg mt-12">
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
};

export default LayoutContentFootnotes;
