// @flow

import * as React from 'react';

import EmailPlease from '../EmailPlease';

type EmailPleaseBoxProps = {
	id?: string,
};

const EmailPleaseBox = (props: EmailPleaseBoxProps) => (
	<section
		className={[
			'bg-white',
			'border border-turtle',
			'p-4 sm:p-8',
			'shadow-md',
			'max-w-md mx-auto text-center',
		].join(' ')}
	>
		<h2 className="text-xl">Don’t miss a thing!</h2>
		<div className="mt-4 mx-8">
			Stay updated and be the first to discover new articles:
		</div>
		<EmailPlease id={props.id} />
	</section>
);

export default EmailPleaseBox;
