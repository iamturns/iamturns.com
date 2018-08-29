// @flow

export function isEnvLive(): boolean {
	return process.env.NODE_ENV === "production";
}
