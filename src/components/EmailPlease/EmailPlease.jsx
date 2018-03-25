// @flow

import * as React from 'react';

import ArrowRight from '../../../vendor/feather-icons-react/ArrowRight';

const EmailPlease = () => (
	<section
		className={[
			'bg-white',
			'border border-turtle',
			'p-4 sm:p-8',
			'shadow-md',
			'max-w-sm mx-auto text-center',
		].join(' ')}
	>
		<h2 className="text-xl">Stay updated</h2>
		<div className="mt-4 mx-8">Get an email when I write new stuff</div>
		<form
			action="https://iamturns.us17.list-manage.com/subscribe/post?u=5d5780fe2d3de49f7c38306f2&amp;id=46266d5c5e"
			method="post"
			target="_blank"
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
		</form>
	</section>
);

export default EmailPlease;
