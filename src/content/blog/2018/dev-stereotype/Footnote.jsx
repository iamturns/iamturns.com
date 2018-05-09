// @flow

import * as React from 'react';

export type Footnote = {
	key: string,
	node: React.Node,
};

export function generateFootnoteHash(footnote: Footnote): string {
	return `footnote-${footnote.key}`;
}
