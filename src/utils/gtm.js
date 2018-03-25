// @flow

export function gtmDataLayerPush(data: Object) {
	if (typeof window === 'undefined') {
		// Server side, never mind...
		return;
	}
	if (!window.dataLayer) {
		window.dataLayer = [];
	}
	window.dataLayer.push(data);
}
