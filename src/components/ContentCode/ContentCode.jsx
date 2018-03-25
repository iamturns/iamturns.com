// @flow

import classNames from 'classnames';
import * as React from 'react';

import stripIndent from '../../../vendor/strip-indent';
import Prism from '../Prism';

type ContentCodeProps = {
	code: string,
	language?: string, // default = 'bash'
	className?: string,
	// ...wrapperProps
};

const ContentCode = ({
	language = 'bash',
	code,
	className,
	...wrapperProps
}: ContentCodeProps) => (
	<Prism>
		<code
			className={classNames(`language-${language}`, className)}
			{...wrapperProps}
		>
			{stripIndent(code).trim()}
		</code>
	</Prism>
);

export default ContentCode;
