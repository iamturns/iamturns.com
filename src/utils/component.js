// @flow

import * as React from "react";

export function getDisplayName(WrappedComponent: React.ComponentType<any>): string {
	// $FlowFixMe
	return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
