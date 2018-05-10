// @flow

import * as React from 'react';

import ImgFace from '../../assets/images/matt-turnbull-cartoon-120.png';
import ImgFace2x from '../../assets/images/matt-turnbull-cartoon-240.png';
import type { Content } from '../../types/Content';
import EmailPlease from '../EmailPlease';
import Link from '../Link';

type Props = {
	currentContent: Content,
};

const LayoutContentEmail = (props: Props) => (
	<aside className="mt-12">
		<div className="inline-flex flex-row items-center">
			<div className="pr-6 flex-none">
				<Link to="/about/">
					<img
						src={ImgFace}
						srcSet={`${ImgFace2x} 2x`}
						alt="Matt Turnbull"
						width="80"
						height="80"
						className="block rounded-full border-2 border-turtle-darker hover:grow-sm transition-slow"
					/>
				</Link>
			</div>
			<div>
				<h2 className="h4 mt-0">Hey! Did you enjoy that?</h2>
				<p className="p mb-0">
					I can send you an email when I write a similar article:
				</p>
			</div>
		</div>
		<div>
			<EmailPlease id={getEmailId(props.currentContent)} />
		</div>
	</aside>
);

export default LayoutContentEmail;

function getEmailId(currentContent: Content): string {
	return `cta-${currentContent.fields.slug}`;
}
