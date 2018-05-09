// @flow

import * as React from 'react';

import Link from '../Link';

type Props = {
	link: string,
	id: number,
};

const FootnoteLink = (props: Props) => (
	<sup className="text-xxs text-turtle-dark">
		<Link to={props.link} className="no-underline">
			[{props.id}]
		</Link>
	</sup>
);

export default FootnoteLink;
