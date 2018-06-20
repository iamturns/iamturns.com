// @flow

import * as React from 'react';

type GTMBodyProps = {
	id: string,
};

const GTMBody = ({ id }: GTMBodyProps) => (
	// eslint-disable-next-line react/no-danger
	<noscript dangerouslySetInnerHTML={{ __html: generateInnerHtml(id) }} />
);

function generateInnerHtml(id: string): string {
	return `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
}

export default GTMBody;
