// @flow

import moment from 'moment';
import * as React from 'react';

type DateTimeProps = {
	dateTime: string, // ISO 8601
	format?: string,
	formatSameYear?: string,
	// ...wrapperProps
};

const DateTime = ({
	dateTime,
	format = 'MMM D, YYYY',
	formatSameYear = 'MMM D',
	...wrapperProps
}: DateTimeProps) => {
	if (!dateTime) {
		return null;
	}
	return (
		<time dateTime={dateTime} {...wrapperProps}>
			{formatDateTime(dateTime, format, formatSameYear)}
		</time>
	);
};

const THIS_YEAR = moment().year();

function formatDateTime(
	dateTime: string, // ISO 8601
	format: string,
	formatSameYear: string,
): string {
	const theMoment = moment(dateTime);
	if (isSameYear(theMoment)) {
		return theMoment.format(formatSameYear);
	}
	return theMoment.format(format);
}

function isSameYear(theMoment): boolean {
	return theMoment.year() === THIS_YEAR;
}

export default DateTime;
