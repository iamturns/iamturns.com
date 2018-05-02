// @flow

import _ from 'lodash';
import * as React from 'react';

import type { Content } from '../../types/Content';
import ContentListing from '../ContentListing';
import EmailPlease from '../EmailPlease';
import Hey from '../Hey';
import PageContainer from '../PageContainer';

type FooterProps = {
	contentList: Array<Content>,
	currentContent?: Content,
};

const Footer = ({ contentList, currentContent }: FooterProps) => (
	<div>
		<PageContainer className="mt-12 py-12 bg-denim-white">
			<Hey />
			<div className="mt-12">
				<EmailPlease id={_.get(currentContent, 'fields.slug')} />
			</div>
		</PageContainer>
		<ContentListing
			contentList={contentList}
			currentContent={currentContent}
		/>
	</div>
);

export default Footer;
