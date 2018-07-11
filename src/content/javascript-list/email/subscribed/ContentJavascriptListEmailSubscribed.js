// @flow

import * as React from 'react';

import ArrowLeft from '../../../../../vendor/feather-icons-react/ArrowLeft';
import ContentHeader from '../../../../components/ContentHeader';
import HeadTagsContent from '../../../../components/HeadTagsContent';
import Link from '../../../../components/Link';
import PageContainer from '../../../../components/PageContainer';
import type { Content } from '../../../../types/Content';

export const frontmatter = {
	title: 'Yes!',
	cover: './jumping.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentJavascriptListEmailSubscribedQuery($slug: String!) {
		...CurrentContent
	}
`;

type ContentProps = {
	data: {
		currentContent: Content,
	},
};

const ContentJavascriptListEmailSubscribed = ({
	data: { currentContent },
}: ContentProps) => (
	<div>
		<HeadTagsContent content={currentContent} />
		<ContentHeader image={currentContent.frontmatter.cover} />
		<PageContainer small className="wysiwyg my-12">
			<p>
				You‘re in! Thanks for your interest in{' '}
				<Link to="/javascript-list">The JavaScript List</Link>.
			</p>

			<p>
				The list is just a personal ugly spreadsheet for now. If I get
				enough interest, I will take time to tidy the list and publish
				it weekly.
			</p>

			<p>I‘ll send you an email if it kicks off.</p>
			<p>
				Feel free to tell your friends about{' '}
				<Link to="/javascript-list">The JavaScript List</Link> — the
				more the merrier!
			</p>

			<p>
				Love,<br />Matt
			</p>
			<p className="p mt-8">
				<Link to="/" className="button inline-flex items-center">
					<ArrowLeft className="w-4 h-4 mr-1" />
					Back to I Am Turns
				</Link>
			</p>
		</PageContainer>
	</div>
);

export default ContentJavascriptListEmailSubscribed;
