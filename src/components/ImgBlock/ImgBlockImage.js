// @flow

import * as React from "react";

import type { Image } from "../../types/Image";
import Img from "../Img";
import Link from "../Link";

type ImgBlockImageProps = {
	image: Image,
	linkTo?: string,
	alt?: string,
};

const ImgBlockImage = ({ image, alt, linkTo }: ImgBlockImageProps) => {
	const img = <Img image={image} alt={alt} />;

	if (!linkTo) {
		return img;
	}

	return (
		<Link to={linkTo} target="_blank">
			{img}
		</Link>
	);
};

export default ImgBlockImage;
