// @flow

import * as React from 'react';

import ArrowRight from '../../../vendor/feather-icons-react/ArrowRight';
import type { Image } from '../../types/Image';
import DateTime from '../DateTime';
import Img from '../Img';
import Link from '../Link';

type CardProps = {
	linkTo: string,
	title: string,
	image?: Image,
	text?: string,
	dateTime?: string, // ISO 8601
};

const Card = (props: CardProps) => (
	<article className="flex w-full max-w-sm pb-12 md:p-4 md:w-1/2 xl:w-1/4">
		<div className="flex flex-col w-full bg-white hover:fly">
			<CardImgTitle {...props} />
			<CardDetails {...props} />
		</div>
	</article>
);

export default Card;

const CardImgTitle = (props: CardProps) => (
	<div className="relative overflow-hidden">
		<Link to={props.linkTo}>
			<div className="sm:bg-turtle-black">
				<Img image={props.image} className="sm:opacity-50" alt="" />
			</div>

			<div className="sm:absolute sm:pin sm:flex sm:items-center">
				<div className="text-highlight w-full sm:mx-4 text-black visited-turtle-darkest hover:darken">
					<h2 className="text-lg font-bold">{props.title}</h2>
				</div>
			</div>
		</Link>
	</div>
);

const CardDetails = (props: CardProps) => (
	<div className="flex flex-grow flex-col justify-between border-2 border-turtle border-t-0">
		<div className="p-4 mt-2">{props.text}</div>
		<div className="p-4 pt-0 flex flex-row-reverse justify-between items-end">
			<CardDetailsLink {...props} />
			<CardDetailsDate {...props} />
		</div>
	</div>
);

const CardDetailsDate = (props: CardProps) => {
	if (!props.dateTime) {
		return null;
	}
	return (
		<div className="text-xxs text-turtle-darker flex justify-end">
			<DateTime dateTime={props.dateTime} />
		</div>
	);
};

const CardDetailsLink = (props: CardProps) => (
	<Link
		to={props.linkTo}
		className="inline-flex items-center link-border border-dashed visited-turtle-dark"
	>
		<ArrowRight className="w-4 h-4 mr-1" />
		More
	</Link>
);
