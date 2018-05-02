// @flow

import * as React from 'react';

import type { Content } from '../../types/Content';
import ContentListing from '../ContentListing';
import EmailPleaseBox from '../EmailPleaseBox';
import Hey from '../Hey';
import PageContainer from '../PageContainer';

type FooterProps = {
	currentContent: Content,
	contentList: Array<Content>,
};

const Footer = ({ currentContent, contentList }: FooterProps) => (
	<div>
		<PageContainer className="mt-12 py-12 bg-denim-white">
			<Hey />
			<div className="mt-12">
				<EmailPleaseBox id={`footer-${currentContent.fields.slug}`} />
			</div>
		</PageContainer>
		<ContentListing
			contentList={contentList}
			currentContent={currentContent}
		/>
	</div>
);

export default Footer;
