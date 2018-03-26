// @flow

import classNames from 'classnames';
import * as React from 'react';

import type { Image } from '../../types/Image';
import ContentCaption from '../ContentCaption';
import ContentFigure from '../ContentFigure';
import ContentImgImage from './ContentImgImage';

type ContentImgType = 'default' | 'fullwidth' | 'fullscreen';

type ContentImgProps = {
	image: Image,
	linkTo?: string,
	alt?: string,
	type?: ContentImgType, // default = 'default'
	children?: React.Node, // Caption
	className?: string,
	style?: Object,
	// ...wrapperProps
};

const ContentImg = ({
	image,
	linkTo,
	type = 'default',
	className,
	children,
	alt,
	style = {},
	...rest
}: ContentImgProps) => (
	<ContentFigure
		className={classNames(
			'mx-auto text-center',
			type === 'fullscreen' ? 'content-full' : '',
			className,
		)}
		style={processStyle(style, image, type)}
		{...rest}
	>
		<ContentImgImage image={image} alt={alt} linkTo={linkTo} />
		<ContentCaption tag="figcaption">{children}</ContentCaption>
	</ContentFigure>
);

function processStyle(
	style: Object,
	image: Image,
	type: ContentImgType,
): Object {
	if (style.maxWidth) {
		// Do not override existing
		return style;
	}

	if (['fullwidth', 'fullscreen'].includes(type)) {
		// Default behaviour is to keep stretching, so leave it
		return style;
	}

	const maxWidth = getMaxWidth(image);
	if (!maxWidth) {
		return style;
	}

	return {
		...style,
		maxWidth,
	};
}

function getMaxWidth(image: Image): ?string {
	if (
		image.childImageSharp &&
		image.childImageSharp.sizes &&
		image.childImageSharp.sizes.sizes
	) {
		// $FlowFixMe
		const sizeParts = image.childImageSharp.sizes.sizes.split(' ');
		return sizeParts[sizeParts.length - 1];
	}
	return null;
}

export default ContentImg;
