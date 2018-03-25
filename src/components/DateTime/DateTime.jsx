// @flow

import moment from 'moment';
import * as React from 'react';

type DateTimeProps = {
	dateTime: string, // ISO 8601
	format?: string,
	// ...wrapperProps
};

const DateTime = ({
	dateTime,
	format = 'D MMM YYYY',
	...wrapperProps
}: DateTimeProps) => {
	if (!dateTime) {
		return null;
	}
	return (
		<time dateTime={dateTime} {...wrapperProps}>
			{moment(dateTime).format(format)}
		</time>
	);
};

export default DateTime;
