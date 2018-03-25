// @flow

import classNames from 'classnames';
import * as React from 'react';

import type { Image } from '../../types/Image';
import Img from '../Img';

const IMG_MIN_HEIGHT = '400px';
const IMG_MAX_HEIGHT = 'calc(100vh - 400px)';

type ContentTitleProps = {
	image: Image,
	title?: string,
};

const ContentTitle = ({ image, title }: ContentTitleProps) => (
	<div
		className="relative overflow-hidden"
		style={{ minHeight: IMG_MIN_HEIGHT, maxHeight: IMG_MAX_HEIGHT }}
	>
		<Img
			image={image}
			alt=""
			style={{ minHeight: IMG_MIN_HEIGHT, maxHeight: IMG_MAX_HEIGHT }}
		/>
		{title && <Title title={title} />}
	</div>
);

export default ContentTitle;

type TitleProps = {
	title: string,
};

const Title = ({ title }: TitleProps) => {
	const isTitleLong = title.length > 60;
	const TitleTag = isTitleLong ? TitleLong : TitleShort;
	return <TitleTag title={title} />;
};

const TitleLong = ({ title }: TitleProps) => (
	<div
		className={classNames(
			'sm:absolute sm:pin',
			'sm:flex sm:items-center sm:justify-center',
		)}
	>
		<div className="sm:max-w-lg sm:px-8">
			<HeadingText title={title} />
		</div>
	</div>
);

const TitleShort = ({ title }: TitleProps) => (
	<div
		className={classNames(
			'absolute pin',
			'flex items-center justify-center',
		)}
	>
		<div className="max-w-lg px-8">
			<HeadingText title={title} />
		</div>
	</div>
);

const HeadingText = ({ title }: TitleProps) => (
	<h1 className={classNames('text-highlight', 'text-2xl md:text-3xl')}>
		{title}
	</h1>
);
