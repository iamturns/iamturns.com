// @flow

import classNames from 'classnames';
import * as React from 'react';

import stripIndent from '../../../vendor/strip-indent';
import ContentBlock from '../ContentBlock';
import Prism from '../Prism';

type ContentCodeBlockProps = {
	code: string,
	language?: string, // default = 'bash'
	highlight?: string,
	className?: string,
	// ...wrapperProps
};

const ContentCodeBlock = ({
	code,
	language = 'bash',
	highlight,
	className,
	...wrapperProps
}: ContentCodeBlockProps) => (
	<ContentBlock
		className={classNames('my-8 code-block', className)}
		{...wrapperProps}
	>
		<Prism>
			<pre data-line={highlight}>
				<code className={`language-${language}`}>
					{stripIndent(code).trim()}
				</code>
			</pre>
		</Prism>
	</ContentBlock>
);

export default ContentCodeBlock;
