// @flow

import classNames from 'classnames';
import * as React from 'react';

import stripIndent from '../../../vendor/strip-indent';
import Prism from '../Prism';

type CodeProps = {
	code: string,
	language?: string, // default = 'bash'
	className?: string,
	// ...wrapperProps
};

const Code = ({
	language = 'bash',
	code,
	className,
	...wrapperProps
}: CodeProps) => (
	<Prism>
		<code
			className={classNames(`language-${language}`, className)}
			{...wrapperProps}
		>
			{stripIndent(code).trim()}
		</code>
	</Prism>
);

export default Code;
