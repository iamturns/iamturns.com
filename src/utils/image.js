// @flow

import type { Image } from '../types/Image';

// $FloxFixMe - Flow is terrible dealing with union types

export function createImage(src: string, width: number, height: number): Image {
	return {
		childImageSharp: {
			sizes: {
				src,
				aspectRatio: width / height,
				sizes: `(max-width: ${width}px) 100vw, ${width}px`,
			},
		},
	};
}

export function getImageSrc(image: Image): ?string {
	if (image.childImageSharp && image.childImageSharp.resolutions) {
		// $FlowFixMe
		return image.childImageSharp.resolutions.src;
	} else if (image.childImageSharp && image.childImageSharp.sizes) {
		// $FlowFixMe
		return image.childImageSharp.sizes.src;
	}
	return null;
}

export type dimensions = {
	width: string,
	height: string,
};

export function getImageDimensions(image: Image): ?dimensions {
	if (image.childImageSharp && image.childImageSharp.resolutions) {
		return {
			// $FlowFixMe
			width: image.childImageSharp.resolutions.width,
			// $FlowFixMe
			height: image.childImageSharp.resolutions.height,
		};
	}

	return null;
}
