// @flow

import * as React from 'react';

import ContentA from '../../../../components/ContentA';
import ContentP from '../../../../components/ContentP';
import ContentSubtitle from '../../../../components/ContentSubtitle';

const Content = () => (
	<div>
		{/* prettier-ignore */}
		<div>
			<ContentSubtitle>Welcome!</ContentSubtitle>
			<ContentP>There’s not much to see yet, but that will change.</ContentP>
			<ContentP>
				It feels great not to rely on <ContentA to="https://medium.com/">Medium</ContentA>. Full ownership of my content, and a place to experiment. Stay tuned!
			</ContentP>
			<div className="h-24" />
		</div>
	</div>
);

export default Content;
