// @flow

import * as React from 'react';

import type { Footnote } from '../types/Footnote';
import { getDisplayName } from '../utils/component';

type Props = {};

type State = {
	footnotes: Array<Footnote>,
};

export function withFootnotesParent(
	WrappedComponent: React.ComponentType<any>,
): React.ComponentType<Props> {
	return class WithFootnotesParent extends React.Component<Props, State> {
		displayName = `WithFootnotesParent(${getDisplayName(
			WrappedComponent,
		)})`;

		constructor(props: Props) {
			super(props);
			// $FlowFixMe
			this.addFootnote = this.addFootnote.bind(this);
		}

		state = {
			footnotes: [],
		};

		addFootnote(footnote: Footnote) {
			this.setState(prevState => ({
				footnotes: [...prevState.footnotes, footnote],
			}));
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
