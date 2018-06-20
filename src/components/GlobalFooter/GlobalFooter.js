// @flow

import classNames from 'classnames';
import * as React from 'react';

import Github from '../../../vendor/feather-icons-react/Github';
import Instagram from '../../../vendor/feather-icons-react/Instagram';
import Mail from '../../../vendor/feather-icons-react/Mail';
import Twitter from '../../../vendor/feather-icons-react/Twitter';
import Link from '../Link';
import PageContainer from '../PageContainer';

type GlobalFooterProps = {
	currentPath: string,
};

const GlobalFooter = (props: GlobalFooterProps) => (
	<PageContainer
		className={classNames(
			'absolute pin-b pin-x',
			'flex items-center justify-between',
			'h-12 overflow-hidden',
			'bg-turtle-darkest text-white',
		)}
	>
		<div className="flex items-center">
			<FooterLink to="/" currentPath={props.currentPath}>
				Home
			</FooterLink>
			<FooterLink to="/about/" currentPath={props.currentPath}>
				About
			</FooterLink>
		</div>
		<div className="flex items-center leading-0">
			<FooterIcon icon="twitter" href="https://twitter.com/iamturns" />
			<FooterIcon
				icon="instagram"
				href="https://www.instagram.com/iamturns/"
			/>
			<FooterIcon icon="github" href="https://github.com/iamturns" />
			<FooterIcon icon="mail" href="mailto:matt@iamturns.com" />
		</div>
	</PageContainer>
);

export default GlobalFooter;

type FooterLinkProps = {
	to: string,
	currentPath: string,
	children: React.Node,
};

const FooterLink = (props: FooterLinkProps) => {
	if (props.currentPath === props.to) {
		return null;
	}

	return (
		<Link
			to={props.to}
			className={classNames(
				'text-turtle-white hover:text-turtle-lighter',
				'border-turtle-lighter hover:border-b',
				'mr-6',
			)}
		>
			{props.children}
		</Link>
	);
};

type FooterIconProps = {
	href: string,
	icon: 'twitter' | 'instagram' | 'github' | 'mail',
};

const FooterIcon = (props: FooterIconProps) => {
	const components = {
		twitter: Twitter,
		instagram: Instagram,
		github: Github,
		mail: Mail,
	};

	const IconTag = components[props.icon];

	return (
		<a
			href={props.href}
			target="_blank"
			className="text-turtle-white hover:text-turtle-lighter"
		>
			<IconTag className="w-4 h-4 ml-4 hover:grow" />
		</a>
	);
};
