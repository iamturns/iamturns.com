// @flow

import classNames from "classnames";
import * as React from "react";

import ImgFace from "../../assets/images/matt-turnbull-cartoon-120.png";
import ImgFace2x from "../../assets/images/matt-turnbull-cartoon-240.png";
import Link from "../Link/";

type FaceLinkProps = {
	size?: number,
};

const FaceLink = ({ size = 120 }: FaceLinkProps) => (
	<Link to="/about/">
		<img
			src={ImgFace}
			srcSet={`${ImgFace2x} 2x`}
			alt="Matt Turnbull"
			width={size}
			height={size}
			className={classNames(
				"block rounded-full",
				"border-2 border-turtle-darker",
				"hover:grow-sm transition-slow",
			)}
		/>
	</Link>
);

export default FaceLink;
