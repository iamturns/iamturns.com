// @flow

import * as React from 'react';

import ImgFace from '../../assets/images/matt-turnbull-120.jpg';
import LastUpdated from '../LastUpdated';
import Link from '../Link';

type AuthorProps = {
	date: string,
};

const Author = (props: AuthorProps) => (
	<div className="flex justify-center">
		<div className="flex flex-col sm:flex-row items-center text-xs text-turtle-darkest">
			<By />
			{props.date && (
				<div className="mt-2 sm:mt-0 sm:ml-2">
					<LastUpdated dateTime={props.date} />
				</div>
			)}
		</div>
	</div>
);

const By = () => (
	<div className="flex items-center">
		<div className="flex-none mr-2">
			<Pic />
		</div>
		<div>
			<Name />
		</div>
	</div>
);

const Pic = () => (
	<Link to="/about">
		<img
			src={ImgFace}
			alt="Matt Turnbull"
			width="45"
			height="45"
			className="rounded-full"
		/>
	</Link>
);

const Name = () => (
	<div>
		by{' '}
		<Link to="/about" className="text-turtle-darkest hover:underline">
			Matt Turnbull
		</Link>
	</div>
);

export default Author;
