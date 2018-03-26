// @flow

import * as React from 'react';

import type { Content } from '../../types/Content';
import ContentListing from '../ContentListing';
import EmailPlease from '../EmailPlease';
import Hey from '../Hey';
import PageContainer from '../PageContainer';

type FooterProps = {
	contentList: Array<Content>,
	contentListNerds: Array<Content>,
	currentContent?: Content,
};

const Footer = ({
	contentList,
	contentListNerds,
	currentContent,
}: FooterProps) => (
	<div>
		<PageContainer className="mt-12 py-12 bg-denim-white">
			<Hey />
		</PageContainer>
		<ContentListing
			contentList={contentList}
			currentContent={currentContent}
		/>
		<ContentListing
			contentList={contentListNerds}
			currentContent={currentContent}
			nerdsOnly
		/>
		<PageContainer className="py-12 bg-denim-white">
			<EmailPlease />
		</PageContainer>
	</div>
);

export default Footer;
