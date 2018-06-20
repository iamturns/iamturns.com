// @flow

import GatsbyImg from 'gatsby-image';
import * as React from 'react';

import type { Image } from '../../types/Image';

type ImgProps = {
	image: ?Image,
	// ...wrapperProps
};

const Img = ({ image, ...rest }: ImgProps) => {
	if (!image) {
		return null;
	}

	if (image.childImageSharp && image.childImageSharp.sizes) {
		return <GatsbyImg sizes={image.childImageSharp.sizes} {...rest} />;
	} else if (image.childImageSharp && image.childImageSharp.resolutions) {
		return (
			<GatsbyImg
				resolutions={image.childImageSharp.resolutions}
				{...rest}
			/>
		);
	}

	return null;
};

export default Img;
