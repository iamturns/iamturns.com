// @flow

export type Result<T> = {
	edges: Array<{
		node: T,
	}>,
};
