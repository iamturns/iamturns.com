// @flow

import type { Result } from '../types/Result';

export function isResultEmpty(result: Result<any>): boolean {
	return !result || !result.edges || result.edges.length === 0;
}

export function getResultAsArray<T>(result: Result<T> | Array<T>): Array<T> {
	if (Array.isArray(result)) {
		return result;
	}
	if (isResultEmpty(result)) {
		return [];
	}
	return result.edges.map(edge => edge.node);
}
