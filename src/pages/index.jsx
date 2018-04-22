// @flow

import * as React from 'react';

import ContentListing from '../components/ContentListing';
import EmailPlease from '../components/EmailPlease';
import HeadTags from '../components/HeadTags';
import Hey from '../components/Hey';
import PageContainer from '../components/PageContainer';
import type { Content } from '../types/Content';
import type { Result } from '../types/Result';
import getHeadTags from '../utils/head-tags';
import { getResultAsArray } from '../utils/result';
import { prefixSiteUrl } from '../utils/url';

declare var graphql: Function;
export const pageQuery: string = graphql`
	query PageIndexQuery {
		...ContentList
	}
`;

export type PageProps = {
	data: {
		contentListResult: Result<Content>,
		contentListNerdsResult: Result<Content>,
	},
	location: {
		pathname: string,
	},
};

const PageIndex = ({
	data: { contentListResult, contentListNerdsResult },
	location: { pathname },
}: PageProps) => (
	<div>
		<HeadTags
			{...getHeadTags({
				pageUrl: prefixSiteUrl(pathname),
				pageTitle: 'I Am Turns',
			})}
		/>
		<PageContainer className="pt-12">
			<Hey />
		</PageContainer>
		<ContentListing contentList={getResultAsArray(contentListResult)} />
		<ContentListing
			contentList={getResultAsArray(contentListNerdsResult)}
			title="Nerds Only"
			bgPattern
		/>
		<PageContainer className="py-12 bg-denim-white">
			<EmailPlease />
		</PageContainer>
	</div>
);

export default PageIndex;
