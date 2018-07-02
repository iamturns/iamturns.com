// @flow

import * as React from 'react';

import type { Content } from '../../types/Content';
import { prefixSiteUrl } from '../../utils/url';
import Disqus from '../Disqus/';

type DisqusProps = {
	content: Content,
};

const DisqusContent = ({ content }: DisqusProps) => {
	return (
		<Disqus
			config={{
				url: prefixSiteUrl(content.fields.slug),
				identifier: content.fields.slug,
				title: content.frontmatter.title,
			}}
		/>
	);
};

export default DisqusContent;
