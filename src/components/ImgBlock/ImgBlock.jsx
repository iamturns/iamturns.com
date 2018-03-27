// @flow

import classNames from 'classnames';
import * as React from 'react';

import type { Image } from '../../types/Image';
import ImgBlockImage from './ImgBlockImage';

type ImgBlockType = 'default' | 'fullwidth' | 'fullscreen';

type ImgBlockProps = {
	image: Image,
	linkTo?: string,
	alt?: string,
	type?: ImgBlockType, // default = 'default'
	children?: React.Node, // Caption
	className?: string,
	style?: Object,
	// ...wrapperProps
};

const ImgBlock = ({
	image,
	linkTo,
	type = 'default',
	className,
	children,
	alt,
	style = {},
	...rest
}: ImgBlockProps) => (
	<figure
		className={classNames(
			'my-8 mx-auto text-center',
			type === 'fullscreen' ? 'fullscreen' : '',
			className,
		)}
		style={processStyle(style, image, type)}
		{...rest}
	>
		<ImgBlockImage image={image} alt={alt} linkTo={linkTo} />
		<figcaption className="my-2 text-sm text-center text-turtle-darker">
			{children}
		</figcaption>
	</figure>
);

function processStyle(style: Object, image: Image, type: ImgBlockType): Object {
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

export default ImgBlock;
