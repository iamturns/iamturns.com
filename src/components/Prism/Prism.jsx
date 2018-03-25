// @flow

import * as React from 'react';

require('../../../vendor/prismjs/prism');

type PrismProps = {
	children: React.Node,
};

export default class Prism extends React.Component<PrismProps> {
	static isPrismLoaded(): boolean {
		return window && window.Prism;
	}

	componentDidMount() {
		this.highlight();
	}

	componentDidUpdate() {
		this.highlight();
	}

	domNode: ?HTMLSpanElement;

	highlight() {
		if (!this.constructor.isPrismLoaded()) {
			return;
		}
		window.Prism.highlightAllUnder(this.domNode);
	}

	handleRef = (domNode: ?HTMLSpanElement) => {
		this.domNode = domNode;
	};

	render() {
		return <span ref={this.handleRef}>{this.props.children}</span>;
	}
}
