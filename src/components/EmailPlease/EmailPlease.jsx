// @flow

import * as React from 'react';

import ArrowRight from '../../../vendor/feather-icons-react/ArrowRight';

type EmailPleaseProps = {
	id?: string,
};

const EmailPlease = (props: EmailPleaseProps) => (
	<div>
		<form
			action="https://iamturns.us17.list-manage.com/subscribe/post?u=5d5780fe2d3de49f7c38306f2&amp;id=46266d5c5e"
			method="post"
			className="flex items-center mt-4"
		>
			<div className="flex-1">
				<input
					type="email"
					name="EMAIL"
					placeholder="Email"
					className="input w-full border-turtle border-r-0 rounded-r-none"
				/>
			</div>
			<div className="w-12 flex">
				<button
					name="subscribe"
					type="submit"
					className="button border-turtle border-l-0 w-full rounded-l-none shadow"
				>
					<div className="flex justify-center">
						<ArrowRight className="w-4 h-4" />
					</div>
				</button>
			</div>
			{props.id && <input type="hidden" name="ID" value={props.id} />}
		</form>
		<div className="text-xs text-center pt-2 text-turtle-darker">
			No spam, just love.
		</div>
	</div>
);

export default EmailPlease;
