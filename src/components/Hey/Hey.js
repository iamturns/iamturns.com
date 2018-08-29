// @flow

import * as React from "react";

import ArrowRight from "../../../vendor/feather-icons-react/ArrowRight";
import FaceLink from "../FaceLink";
import Link from "../Link";

const Hey = () => (
	<div className="text-center">
		<div className="inline-flex flex-col sm:flex-row items-center">
			<div className="pb-4 sm:pb-0 sm:pr-8">
				<FaceLink />
			</div>
			<div>
				<Info />
			</div>
		</div>
	</div>
);

const Info = () => (
	<div className="flex flex-col">
		<div className="text-center pb-4">
			<h1 className="text-lg">
				Hey, I’m{" "}
				<Link to="/about/" className="link-border">
					Matt Turnbull
				</Link>
			</h1>
			<div className="mt-4">I make websites &amp; apps.</div>
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
