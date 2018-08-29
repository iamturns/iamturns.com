// @flow

import * as React from "react";

import type { Content } from "../../types/Content";
import EmailPlease from "../EmailPlease";

type Props = {
	currentContent: Content,
};

const LayoutContentEmail = (props: Props) => (
	<aside className="mt-6">
		<h2 className="h4 mt-0">Hey! Did you enjoy that?</h2>
		<p className="p mb-0">I can send you an email when I write a similar article:</p>
		<EmailPlease id={getEmailId(props.currentContent)} />
	</aside>
);

export default LayoutContentEmail;

function getEmailId(currentContent: Content): string {
	return `cta-${currentContent.fields.slug}`;
}
