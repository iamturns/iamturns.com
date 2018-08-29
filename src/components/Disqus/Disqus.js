// @flow

import DisqusVendor from "disqus-react";
import * as React from "react";

type DisqusProps = {
	config: Object,
};

const Disqus = ({ config }: DisqusProps) => (
	<DisqusVendor.DiscussionEmbed shortname="iamturns" config={config} />
);

export default Disqus;
