// @flow

import * as React from 'react';

import FootnoteLink from '../../../../components/FootnoteLink';
import Link from '../../../../components/Link';
import type { Footnote } from './Footnote';
import { generateFootnoteHash } from './Footnote';

type Props = {
	addFootnote: (footnote: Footnote) => number,
};

class ContentDevStereotypeArticle extends React.Component<Props> {
	footnoteLink(footnote: Footnote): React.Node {
		return (
			<FootnoteLink
				link={`#${generateFootnoteHash(footnote)}`}
				id={this.props.addFootnote(footnote)}
			/>
		);
	}

	render() {
		return (
			<div className="wysiwyg">
				<p>
					This little story is inspired by the by the 100,000
					developers who participated in the{' '}
					<Link to="https://insights.stackoverflow.com/survey/2018/">
						2018 Stack Overflow developer survey
					</Link>.
				</p>
				<hr />
				<p>
					Hey, I’m Joe. I’m 30 years old,
					{this.footnoteLink({
						key: 'age',
						node: (
							<div>
								The majority of developers (49.2%) are between
								the age of 25 and 34.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-age" />
							</div>
						),
					})}{' '}
					white,
					{this.footnoteLink({
						key: 'race',
						node: (
							<div>
								The majority of developers (74.2%) are white or
								of European descent.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-race-and-ethnicity" />
							</div>
						),
					})}{' '}
					straight,
					{this.footnoteLink({
						key: 'sexual-orientation',
						node: (
							<div>
								The majority of developers (93.2%) are
								heterosexual.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-sexual-orientation" />
							</div>
						),
					})}{' '}
					and male.
					{this.footnoteLink({
						key: 'gender',
						node: (
							<div>
								The majority of developers (92.9%) are male.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-gender" />
							</div>
						),
					})}{' '}
					Classic.
				</p>
				<p>
					I wake up at around 7:30 am
					{this.footnoteLink({
						key: 'wake',
						node: (
							<div>
								The majority of developers (29.5%) wake up
								between 7:01 and 8:00 AM.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-what-time-do-developers-wake-up" />
							</div>
						),
					})}{' '}
					to the sound of no children.
					{this.footnoteLink({
						key: 'children',
						node: (
							<div>
								The majority of developers (71.1%) do not have
								children or other dependents.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-children-and-other-dependents" />
							</div>
						),
					})}{' '}
					Bliss. Then I’m off to my full-time job
					{this.footnoteLink({
						key: 'employment-status',
						node: (
							<div>
								The majority of developers (74%) are employed
								full-time.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#work-employment-status" />
							</div>
						),
					})}{' '}
					at a web development/design company.
					{this.footnoteLink({
						key: 'industry',
						node: (
							<div>
								The majority of developers (16%) are employed in
								the web development or design industry.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#work-industry" />
							</div>
						),
					})}{' '}
					I’m a back-end dev, but get my hands dirty in front-end too
					(full-stack, baby!)
					{this.footnoteLink({
						key: 'role',
						node: (
							<div>
								The majority of developers are back-end (57.9%)
								or full-stack (48.2%).
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-developer-type" />
							</div>
						),
					})}{' '}
					About 60 people work here,
					{this.footnoteLink({
						key: 'company-size',
						node: (
							<div>
								The majority of developers (23.8%) are employed
								at companies with 20 - 99 employees.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#work-company-size" />
							</div>
						),
					})}{' '}
					but my dev buddies are the best.
					{this.footnoteLink({
						key: 'kinship',
						node: (
							<div>
								The majority of developers feel a sense of
								kinship or connection to other developers.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-kinship-competition-and-self-evaluation" />
							</div>
						),
					})}
				</p>
				<p>
					I’ve got a pretty sweet setup: 2 monitors
					{this.footnoteLink({
						key: 'monitors',
						node: (
							<div>
								The majority of developers (51.1%) use 2
								monitors.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#technology-how-many-monitors" />
							</div>
						),
					})}{' '}
					and an ergonomic keyboard &amp; mouse.
					{this.footnoteLink({
						key: 'ergonomic',
						node: (
							<div>
								The majority of developers (52.2%) use an
								ergonomic keyboard or mouse.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#work-what-do-developers-use-to-stay-comfortable-while-working" />
							</div>
						),
					})}{' '}
					I spend between 9 and 12 hours on my computer, so it’s gotta
					be comfortable.{this.footnoteLink({
						key: 'computer-usage',
						node: (
							<div>
								The majority of developers (52.7%) spend between
								9 and 12 hours on a computer.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-how-much-time-do-developers-spend-on-a-computer" />
							</div>
						),
					})}
				</p>
				<p>
					I’ve been working here for about a year.
					{this.footnoteLink({
						key: 'years-working',
						node: (
							<div>
								The majority of developers (30.1%) have been
								coding professionally for less than 2 years.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-years-coding-professionally" />
							</div>
						),
					})}{' '}
					I like it.
					{this.footnoteLink({
						key: 'job-satisfaction',
						node: (
							<div>
								The majority of developers (36.5%) are
								moderately satisfied with their career &amp;
								job.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#work-how-do-developers-feel-about-their-careers-and-jobs" />
							</div>
						),
					})}{' '}
					We use the{' '}
					<Link to="https://en.wikipedia.org/wiki/Agile_software_development">
						agile methodology
					</Link>{' '}
					to stay on track,
					{this.footnoteLink({
						key: 'agile',
						node: (
							<div>
								The majority of developers (85.4%) use the agile
								methodology.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#work-which-methodologies-do-developers-use" />
							</div>
						),
					})}{' '}
					and I check my code into{' '}
					<Link to="https://en.wikipedia.org/wiki/Git">git</Link>
					{this.footnoteLink({
						key: 'git',
						node: (
							<div>
								The majority of developers (87.2%) use Git for
								version control.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#work-version-control" />
							</div>
						),
					})}{' '}
					multiple times a day to keep momentum.
					{this.footnoteLink({
						key: 'check-in',
						node: (
							<div>
								The majority of developers (60.2%) check in
								their code multiple times per day.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#work-how-often-do-developers-check-in-code" />
							</div>
						),
					})}
				</p>
				<p>
					Let’s talk nerdy! I code in the classic{' '}
					<Link to="https://en.wikipedia.org/wiki/HTML">HTML</Link> /{' '}
					<Link to="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">
						CSS
					</Link>{' '}
					/
					<Link to="https://en.wikipedia.org/wiki/JavaScript">
						JavaScript
					</Link>{' '}
					combo.{this.footnoteLink({
						key: 'languages',
						node: (
							<div>
								The majority of developers code in JavaScript
								(69.8%), HTML (68.5%), and CSS (65.1%).
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#technology-programming-scripting-and-markup-languages" />
							</div>
						),
					})}{' '}
					For the front-end I use{' '}
					<Link to="https://en.wikipedia.org/wiki/Angular_(application_platform)">
						Angular
					</Link>{' '}
					or{' '}
					<Link to="https://en.wikipedia.org/wiki/React_(JavaScript_library)">
						React
					</Link>
					{this.footnoteLink({
						key: 'frameworks-front-end',
						node: (
							<div>
								The majority of developers use Angular (36.9%)
								and React (27.8%).
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#technology-frameworks-libraries-and-tools" />
							</div>
						),
					})}{' '}
					(I effing love React!)
					{this.footnoteLink({
						key: 'frameworks-front-end-love',
						node: (
							<div>
								The majority of developers (69.4%) love React.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#technology-most-loved-dreaded-and-wanted-frameworks-libraries-and-tools" />
							</div>
						),
					})}, and for the back-end I use{' '}
					<Link to="https://en.wikipedia.org/wiki/Node.js">
						Node.js
					</Link>
					{this.footnoteLink({
						key: 'frameworks-back-end',
						node: (
							<div>
								The majority of developers (49.6%) use Node.js.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#technology-frameworks-libraries-and-tools" />
							</div>
						),
					})}{' '}
					(so good!)
					{this.footnoteLink({
						key: 'frameworks-back-end-love',
						node: (
							<div>
								The majority of developers (66.4%) love Node.js.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#technology-most-loved-dreaded-and-wanted-frameworks-libraries-and-tools" />
							</div>
						),
					})}. I stick to a{' '}
					<Link to="https://en.wikipedia.org/wiki/MySQL">MySQL</Link>{' '}
					database,{this.footnoteLink({
						key: 'database',
						node: (
							<div>
								The majority of developers (58.7%) use MySQL.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#technology-databases" />
							</div>
						),
					})}{' '}
					but my mates are loving{' '}
					<Link to="https://en.wikipedia.org/wiki/Redis">Redis</Link>{' '}
					and{' '}
					<Link to="https://en.wikipedia.org/wiki/PostgreSQL">
						PostgreSQL
					</Link>.
					{this.footnoteLink({
						key: 'database-love',
						node: (
							<div>
								The majority of developers love Redis (64.5%)
								and PostgreSQL (62%).
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#technology-most-loved-dreaded-and-wanted-frameworks-libraries-and-tools" />
							</div>
						),
					})}{' '}
					I go for{' '}
					<Link to="https://en.wikipedia.org/wiki/Linux">Linux</Link>
					{this.footnoteLink({
						key: 'linux',
						node: (
							<div>
								The majority of developers (48.3%) use Linux.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#technology-platforms" />
							</div>
						),
					})}{' '}
					(which is awesome)
					{this.footnoteLink({
						key: 'linux-love',
						node: (
							<div>
								The majority of developers (76.5%) love Linux.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#technology-most-loved-dreaded-and-wanted-platforms" />
							</div>
						),
					})}, but my co-workers rave about{' '}
					<Link to="https://en.wikipedia.org/wiki/Serverless_computing">
						Serverless
					</Link>{' '}
					and{' '}
					<Link to="https://en.wikipedia.org/wiki/Amazon_Web_Services">
						AWS
					</Link>.
					{this.footnoteLink({
						key: 'platform-love',
						node: (
							<div>
								The majority of developers love Serverless
								(75.2%) and AWS (68.6%).
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#technology-most-loved-dreaded-and-wanted-platforms" />
							</div>
						),
					})}
				</p>
				<p>
					I’m not looking for a new job, but if something came up I’d
					think about it.
					{this.footnoteLink({
						key: 'job-search',
						node: (
							<div>
								The majority of developers (59.8%) are not
								actively looking for a job, but are open to new
								opportunities.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#work-job-search-status" />
							</div>
						),
					})}{' '}
					Especially if they pay well, and give me experience with
					awesome tech
					{this.footnoteLink({
						key: 'job-criteria',
						node: (
							<div>
								The majority of developers assess potential jobs
								by compensation and benefits (18.3%), and what
								technology they will be working with (17.3%).
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#work-how-do-developers-assess-potential-jobs" />
							</div>
						),
					})}{' '}
					like{' '}
					<Link to="https://en.wikipedia.org/wiki/Rust_(programming_language)">
						Rust
					</Link>,{' '}
					<Link to="https://en.wikipedia.org/wiki/Kotlin_(programming_language)">
						Kotlin
					</Link>,{' '}
					<Link to="https://en.wikipedia.org/wiki/Python_(programming_language)">
						Python
					</Link>,{' '}
					<Link to="https://en.wikipedia.org/wiki/TypeScript">
						TypeScript
					</Link>,{' '}
					<Link to="https://en.wikipedia.org/wiki/Go_(programming_language)">
						Go
					</Link>, and{' '}
					<Link to="https://en.wikipedia.org/wiki/Swift_(programming_language)">
						Swift
					</Link>.{this.footnoteLink({
						key: 'loved',
						node: (
							<div>
								<Link to="https://insights.stackoverflow.com/survey/2018/#technology-most-loved-dreaded-and-wanted-languages" />
							</div>
						),
					})}{' '}
					Oh, and machine learning is interesting — I see devs going
					crazy for{' '}
					<Link to="https://en.wikipedia.org/wiki/TensorFlow">
						TensorFlow
					</Link>{' '}
					and{' '}
					<Link to="https://en.wikipedia.org/wiki/Torch_(machine_learning)">
						Torch
					</Link>{' '}
					/{' '}
					<Link to="https://en.wikipedia.org/wiki/PyTorch">
						PyTorch
					</Link>.{this.footnoteLink({
						key: 'loved-ml',
						node: (
							<div>
								The majority of developers love TensorFlow
								(73.5%) and Torch / PyTorch (68%).
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#technology-most-loved-dreaded-and-wanted-frameworks-libraries-and-tools" />
							</div>
						),
					})}{' '}
					Just keep me the hell away from{' '}
					<Link to="https://en.wikipedia.org/wiki/Visual_Basic">
						VB6
					</Link>,{' '}
					<Link to="https://en.wikipedia.org/wiki/Oracle_Database">
						Oracle
					</Link>, and{' '}
					<Link to="https://en.wikipedia.org/wiki/Apache_Cordova">
						Cordova
					</Link>,{this.footnoteLink({
						key: 'dreaded',
						node: (
							<div>
								The majority of developers dread VB6 (89.9%),
								Oracle (63.1%), and Cordova (59.6%).
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#most-loved-dreaded-and-wanted" />
							</div>
						),
					})}{' '}
					and I ain’t touching{' '}
					<Link to="https://en.wikipedia.org/wiki/SharePoint">
						SharePoint
					</Link>,{' '}
					<Link to="https://en.wikipedia.org/wiki/Drupal">
						Drupal
					</Link>{' '}
					or{' '}
					<Link to="https://en.wikipedia.org/wiki/Salesforce.com">
						Salesforce
					</Link>{' '}
					either!
					{this.footnoteLink({
						key: 'dreaded-2',
						node: (
							<div>
								The majority of developers dread Sharepoint
								(71.8%), Drupal (70.4%), and Salesforce (69.7%).
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#technology-most-loved-dreaded-and-wanted-platforms" />
							</div>
						),
					})}
				</p>
				<p>
					How did I get here? Well… I started coding about four years
					ago.{this.footnoteLink({
						key: 'started',
						node: (
							<div>
								The majority of developers (24.8%) learned to
								code 3 - 5 years ago.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-years-since-learning-to-code" />
							</div>
						),
					})}{' '}
					Got a Bachelor{this.footnoteLink({
						key: 'education-bachelor',
						node: (
							<div>
								The majority of developers completed a
								Bachelor’s degree (46.1%).
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-educational-attainment" />
							</div>
						),
					})}{' '}
					of Computer Science{this.footnoteLink({
						key: 'education-compsci',
						node: (
							<div>
								The majority of developers (63.7%) majored in
								computer science, computer engineering, or
								software engineering.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-undergraduate-major" />
							</div>
						),
					})}{' '}
					and haven’t stopped since. I’m playing with{' '}
					<Link to="https://en.wikipedia.org/wiki/Python_(programming_language)">
						Python
					</Link>,{' '}
					<Link to="https://en.wikipedia.org/wiki/MongoDB">
						MongoDB
					</Link>{' '}
					and{' '}
					<Link to="https://en.wikipedia.org/wiki/Android_software_development">
						Android
					</Link>
					{this.footnoteLink({
						key: 'wanted',
						node: (
							<div>
								The majority of developers want Python (25.1%),
								MongoDB (18.6%), and Android (16%).
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#most-loved-dreaded-and-wanted" />
							</div>
						),
					})}{' '}
					at home for fun{this.footnoteLink({
						key: 'hobby',
						node: (
							<div>
								The majority of developers (80.8%) code as a
								hobby.
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-coding-as-a-hobby" />
							</div>
						),
					})}{' '}
					by reading the official docs and using{' '}
					<Link to="https://stackoverflow.com/">Stack Overflow</Link>.{this.footnoteLink(
						{
							key: 'learn-methods',
							node: (
								<div>
									The majority of developers learn by official
									documentation (83%) and Stack Overflow
									(82.7%).
									<br />
									<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-ways-developers-learn-on-their-own" />
								</div>
							),
						},
					)}
				</p>
				<p>
					One day I might start my own company, but I want to stay
					techy over the next five years.{this.footnoteLink({
						key: 'future',
						node: (
							<div>
								In 5 years time, the majority of developers hope
								to be working in a different or more specialized
								technical role (33.9%) or as a founder of their
								own company (25.7%).
								<br />
								<Link to="https://insights.stackoverflow.com/survey/2018/#developer-profile-ways-developers-learn-on-their-own" />
							</div>
						),
					})}{' '}
					I’ll keep you posted, see you next year!
				</p>
			</div>
		);
	}
}

export default ContentDevStereotypeArticle;
