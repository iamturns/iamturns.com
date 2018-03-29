// @flow

export type GatsbyImageResolutions = {
	resolutions: {
		base64?: string,
		height: number,
		src: string,
		srcSet: string,
		width: number,
	},
};

export type GatsbyImageSizes = {
	sizes: {
		aspectRatio: number,
		base64?: string,
		sizes: string,
		src: string,
		srcSet: string,
	},
};

export type Image = {
	childImageSharp: GatsbyImageResolutions | GatsbyImageSizes,
};
