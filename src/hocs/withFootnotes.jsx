// @flow

import * as React from 'react';

import type { Footnote } from '../types/Footnote';
import { getDisplayName } from '../utils/component';

type Props = {};

type State = {
	footnotes: Array<Footnote>,
};

export function withFootnotes(
	WrappedComponent: React.ComponentType<any>,
): React.ComponentType<Props> {
	return class WithFootnotes extends React.Component<Props, State> {
		displayName = `WithFootnotes(${getDisplayName(WrappedComponent)})`;

		constructor(props: Props) {
			super(props);
			// $FlowFixMe
			this.addFootnote = this.addFootnote.bind(this);
		}

		state = {
			footnotes: [],
		};

		componentWillUpdate() {
			this.state.footnotes = [];
		}

		addFootnote(footnote: Footnote): number {
			this.state.footnotes.push(footnote);
			return this.state.footnotes.length;
		}

		render() {
			return (
				<WrappedComponent
					footnotes={this.state.footnotes}
					addFootnote={this.addFootnote}
					{...this.props}
				/>
			);
		}
	};
}
