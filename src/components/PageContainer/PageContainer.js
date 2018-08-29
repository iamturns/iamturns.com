// @flow

import classNames from "classnames";
import * as React from "react";

type PageContainerProps = {
	children: React.Node,
	small?: boolean, // default = false
	className?: string,
	// ... wrapperProps
};

const PageContainer = ({ children, small = false, className, ...rest }: PageContainerProps) => (
	<div className={classNames("px-4 sm:px-8", small ? "max-w-md mx-auto" : "", className)} {...rest}>
		{children}
	</div>
);

export default PageContainer;
