// @flow

import type { Footnote } from '../types/Footnote';

export function generateFootnoteHash(footnote: Footnote): string {
	return `footnote-${footnote.key}`;
}
