// @flow

import classNames from 'classnames';
import * as React from 'react';

type HeadingBrickProps = {
	children: React.Node,
	className?: string,
	// ... wrapperProps
};

const HeadingBrick = ({
	children,
	className,
	...wrapperProps
}: HeadingBrickProps) => (
	<div
		className={classNames(
			'text-center',
			'text-xl uppercase tracking-wide',
			'text-turtle-darker',
			className,
		)}
		{...wrapperProps}
	>
		<div
			className={classNames(
				'inline-block',
				'bg-white',
				'border-2 border-turtle-darker',
				'py-2 px-6',
			)}
		>
			{children}
		</div>
	</div>
);

export default HeadingBrick;
