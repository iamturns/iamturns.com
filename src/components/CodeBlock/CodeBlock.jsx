// @flow

import classNames from 'classnames';
import * as React from 'react';

import stripIndent from '../../../vendor/strip-indent';
import Prism from '../Prism';

type CodeBlockProps = {
	code: string,
	language?: string, // default = 'bash'
	highlight?: string,
	className?: string,
	// ...wrapperProps
};

const CodeBlock = ({
	code,
	language = 'bash',
	highlight,
	className,
	...wrapperProps
}: CodeBlockProps) => (
	<div className={classNames('my-8 code-block', className)} {...wrapperProps}>
		<Prism>
			<pre data-line={highlight}>
				<code className={`language-${language}`}>
					{stripIndent(code).trim()}
				</code>
			</pre>
		</Prism>
	</div>
);

export default CodeBlock;
