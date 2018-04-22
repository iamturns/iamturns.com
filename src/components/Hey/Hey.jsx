// @flow

import * as React from 'react';

import ArrowRight from '../../../vendor/feather-icons-react/ArrowRight';
import ImgFace from '../../assets/images/matt-turnbull-cartoon-120.png';
import ImgFace2x from '../../assets/images/matt-turnbull-cartoon-240.png';
import Link from '../Link';

const Hey = () => (
	<div className="text-center">
		<div className="inline-flex flex-col sm:flex-row items-center">
			<div className="pb-4 sm:pb-0 sm:pr-8">
				<Pic />
			</div>
			<div>
				<Info />
			</div>
		</div>
	</div>
);

const Pic = () => (
	<Link to="/about/">
		<img
			src={ImgFace}
			srcSet={`${ImgFace2x} 2x`}
			alt="Matt Turnbull"
			width="120"
			height="120"
			className="rounded-full border-2 border-turtle-darker hover:grow-sm transition-slow"
		/>
	</Link>
);

const Info = () => (
	<div className="flex flex-col">
		<div className="text-center pb-4">
			<h1 className="text-lg">
				Hey, I&apos;m{' '}
				<Link to="/about/" className="link-border">
					Matt Turnbull
				</Link>
			</h1>
			<div className="mt-4">I make websites &amp; apps</div>
			<div className="text-sm">and dish out sweet high fives</div>
		</div>
		<div className="self-end">
			<InfoLink />
		</div>
	</div>
);

const InfoLink = () => (
	<Link to="/about/" className="flex items-center link-border border-dashed">
		<ArrowRight className="w-4 h-4 mr-1" />
		<div>More</div>
	</Link>
);

export default Hey;
