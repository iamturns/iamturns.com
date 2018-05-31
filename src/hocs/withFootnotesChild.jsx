// @flow

import * as React from 'react';

import FootnoteLink from '../components/FootnoteLink';
import type { Footnote } from '../types/Footnote';
import { getDisplayName } from '../utils/component';
import { generateFootnoteHash } from '../utils/footnote';

type Props = {
	addFootnote: (footnote: Footnote) => number,
};

export function withFootnotesChild(
	WrappedComponent: React.ComponentType<any>,
): React.ComponentType<Props> {
	return class WithFootnotesChild extends React.Component<Props> {
		displayName = `WithFootnotesChild(${getDisplayName(WrappedComponent)})`;

		constructor(props: Props) {
			super(props);
			// $FlowFixMe
			this.createFootnoteLink = this.createFootnoteLink.bind(this);
		}

		componentDidMount() {
			this.footnotes.map(footnote => this.props.addFootnote(footnote));
		}

		footnotes: Footnote[] = [];

		createFootnoteLink(footnote: Footnote): FootnoteLink {
			this.footnotes.push(footnote);
			return (
				<FootnoteLink
					link={`#${generateFootnoteHash(footnote)}`}
					id={this.footnotes.length}
				/>
			);
		}

		render() {
			return (
				<WrappedComponent
					createFootnoteLink={this.createFootnoteLink}
					{...this.props}
				/>
			);
		}
	};
}
