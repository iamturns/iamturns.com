// @flow

import * as React from 'react';

import ArrowRight from '../../../vendor/feather-icons-react/ArrowRight';
import Link from '../Link';

const PitchIntro = () => (
	<aside className="wysiwyg">
		<hr className="hr-dash my-6" />
		<h2 className="h3 mt-0">It’s impossible to keep up with JavaScript.</h2>
		<p>
			You’re catching up every chance you get. Scrolling… reading…
			refreshing… skimming. You’re lost in 42 browser tabs of articles,
			tutorials, and GitHub repos. You bookmark a handful to check out
			later (or, never).
		</p>
		<p>
			<strong>It’s overwhelming. There’s too much to know.</strong>
		</p>
		<p>So I developed a system that easily keeps me up-to-date.</p>
		<p>
			<Link
				to="/javascript-roundup/"
				className="button inline-flex items-center"
			>
				<ArrowRight className="w-4 h-4 mr-1" />
				Find out more
			</Link>
		</p>
		<hr className="hr-dash my-6" />
	</aside>
);

export default PitchIntro;
