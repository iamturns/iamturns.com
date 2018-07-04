// @flow

import * as React from 'react';

import CodeBlock from '../../../../components/CodeBlock';
import Emoji from '../../../../components/Emoji';
import ImgBlock from '../../../../components/ImgBlock';
import LayoutContent from '../../../../components/LayoutContent';
import Link from '../../../../components/Link';
import type { Content } from '../../../../types/Content';
import type { Image } from '../../../../types/Image';
import type { Result } from '../../../../types/Result';

export const frontmatter = {
	title: 'Why Are You Still Using Yarn in 2018?',
	description:
		'Simplify your tools and give npm another chance. It‘s just as fast as Yarn, and can achieve Yarn‘s extra features with a couple of modules.',
	slug: '/yarn-vs-npm-2018',
	dateCreated: '2018-07-04',
	dateUpdated: '2018-07-04',
	type: 'article',
	cover: './yarn.jpg',
	shareImage: './yarn.jpg',
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentYarnVsNpmQuery($slug: String!) {
		...CurrentContent
		...ContentList
		imgNpmCheck: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/yarn-vs-npm/npm-check.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 580) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgYarnNpmCRA: file(
			sourceInstanceName: { eq: "content" }
			relativePath: {
				eq: "blog/2018/yarn-vs-npm/yarn-npm-create-react-app.png"
			}
		) {
			childImageSharp {
				sizes(maxWidth: 580) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgYarnNpmJest: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/yarn-vs-npm/yarn-npm-jest.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 580) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgYarnUpgradeInteractive: file(
			sourceInstanceName: { eq: "content" }
			relativePath: {
				eq: "blog/2018/yarn-vs-npm/yarn-upgrade-interactive.png"
			}
		) {
			childImageSharp {
				sizes(maxWidth: 580) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgAutocomplete: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/yarn-vs-npm/autocomplete.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 310) {
					...GatsbyImageSharpSizes
				}
			}
		}
	}
`;

type ContentProps = {
	data: {
		currentContent: Content,
		contentListResult: Result<Content>,
		imgNpmCheck: Image,
		imgYarnNpmCRA: Image,
		imgYarnNpmJest: Image,
		imgYarnUpgradeInteractive: Image,
		imgAutocomplete: Image,
	},
};

const ContentYarnVsNpm = (props: ContentProps) => (
	<LayoutContent
		currentContent={props.data.currentContent}
		contentListResult={props.data.contentListResult}
	>
		<Article {...props} />
	</LayoutContent>
);

export default ContentYarnVsNpm;

const Article = (props: ContentProps) => (
	<div className="wysiwyg">
		<h2>I remember when Yarn exploded onto the scene.</h2>
		<p>
			It was super fast. It saved minutes with every{' '}
			<code>yarn install</code>.
		</p>
		<p>
			It ensured your <code>/node_modules</code> exactly matched the{' '}
			<code>/node_modules</code> of your buddy next to you. And the{' '}
			<code>/node_modules</code> on the server too. No more “it works for
			me ¯\_(ツ)_/¯”.
		</p>
		<p>
			And, emojis everywhere! <Emoji label="fire">🔥</Emoji>
			<Emoji label="fire">🔥</Emoji>
			<Emoji label="fire">🔥</Emoji>
		</p>

		<p>
			<strong>6 months passed…</strong>
		</p>

		<p>
			And npm made an epic comeback with v5, bringing speed improvements
			and consistent <code>/node_modules</code>. Yep, all those reasons we
			switched to Yarn in the first place.
		</p>

		<p>Many devs are now wondering:</p>

		<blockquote className="quote-pull">
			“Is Yarn still necessary?”
		</blockquote>

		<p>
			I think it‘s time to switch back to good ol‘ npm. Let‘s take a look.
		</p>

		<h2>npm is just as fast as Yarn.</h2>

		<p>See for yourself:</p>

		<CodeBlock
			language="bash"
			code={`
				# Backup
				mv node_modules node_modules_backup
				mv package-lock.json package-lock.backup.json
				mv yarn.lock yarn.backup.lock

				# Test npm speed
				time npm install

				# Reset
				rm -Rf node_modules
				rm package-lock.json

				# Test yarn speed
				time yarn install

				# Reset
				rm -Rf node_modules
				rm yarn.lock

				# Restore
				mv node_modules_backup node_modules
				mv package-lock.backup.json package-lock.json
				mv yarn.backup.lock yarn.lock
			`}
		/>

		<p>I ran this three times, and speeds were pretty much the same.</p>

		<h2>You can easily switch npm versions.</h2>

		<p>
			Bob has Yarn v1.1 installed, and Brenda has Yarn v1.2. As they
			install and remove dependencies on a project, Yarn writes to a{' '}
			<code>yarn.lock</code> file. But the lock file format is{' '}
			<em>slightly</em> different between Yarn v1.1 and Yarn v1.2. Not fun
			for Bob and Brenda.
		</p>

		<p>
			You can specify which Yarn version(s) are compatible with your
			project using{' '}
			<Link to="https://yarnpkg.com/lang/en/docs/package-json/#toc-engines">
				engines
			</Link>{' '}
			in <code>package.json</code>.
		</p>

		<p>
			<strong>
				But what if you need to shift between projects reguarly, each
				requiring different Yarn versions?
			</strong>
		</p>

		<p>
			You need to stop using brew (<code>brew uninstall yarn</code>) and
			revert back to an npm install. Run{' '}
			<code>npm install yarn@1.1 --global</code> and{' '}
			<code>npm install yarn@1.2 --global</code> as you flip between
			projects. Yep, re-installing Yarn in its entirety every single time
			you flip between projects. What a nightmare!
		</p>

		<p>
			<strong>But it‘s super easy with npm!</strong>
		</p>

		<p>
			Use <Link to="https://github.com/creationix/nvm">nvm</Link> or{' '}
			<Link to="https://github.com/tj/n">n</Link> and switch versions
			instantly with one command. Boom.
		</p>

		<h2>Use Lerna to manage your workspaces.</h2>

		<p>
			If you‘re using Yarn for the{' '}
			<Link to="https://yarnpkg.com/lang/en/docs/workspaces/">
				workspaces
			</Link>{' '}
			feature, consider using{' '}
			<Link to="https://github.com/lerna/lerna/">Lerna</Link> instead. It
			does everything Yarn offers with additional features, eg: managing
			workspace versions, running comands within each workspace, and
			publishing workspaces.
		</p>

		<h2>Use npm-check to upgrade interactively.</h2>

		<p>
			The <code>yarn upgrade-interactive</code> command is awesome:
		</p>

		<ImgBlock
			image={props.data.imgYarnUpgradeInteractive}
			style={{ maxWidth: '773px' }}
		/>

		<p>
			The popular{' '}
			<Link to="https://github.com/dylang/npm-check">npm-check</Link>{' '}
			module does the same thing:
		</p>

		<ImgBlock
			image={props.data.imgNpmCheck}
			style={{ maxWidth: '767px' }}
		/>

		<p>And is very easy to setup:</p>

		<CodeBlock
			language="bash"
			code={`
				npm install npm-check --save-dev
			`}
		/>

		<p>Add a script to package.json:</p>

		<CodeBlock
			language="bash"
			code={`
				{
					"scripts": {
						"upgrade-interactive": "npm-check --update"
					}
				}
			`}
		/>

		<p>
			Then use <code>npm run upgrade-interactive</code>.
		</p>

		<h2>Yarn complicates.</h2>

		<p>
			From the <Link to="https://github.com/facebook/jest">Jest</Link>{' '}
			readme:
		</p>

		<ImgBlock
			image={props.data.imgYarnNpmJest}
			style={{ maxWidth: '417px' }}
		/>

		<p>
			You don‘t need Yarn to use Jest. But here it is, pushed on you. Now
			I need to convert <code>yarn test</code> into an <code>npm</code>{' '}
			command… ok, is it <code>npm test</code> or{' '}
			<code>npm run test</code>? I can‘t quite remember. This is what the
			readme should tell me!
		</p>

		<p>
			Even if the readme shows both <code>yarn</code> and <code>npm</code>{' '}
			commands, it unnecessarily adds to the noise. For example, here is
			the readme for{' '}
			<Link to="https://github.com/facebook/create-react-app">
				create-react-app
			</Link>:
		</p>

		<ImgBlock
			image={props.data.imgYarnNpmCRA}
			style={{ maxWidth: '376px' }}
		/>

		<p>What benefit is Yarn bringing here? None.</p>
		<p>
			It‘s confusing for brand new React developers who are already
			overwhelmed with learning a new framework. “Which command do I run?
			What is this Yarn one? Do I need it? Argh!”
		</p>

		<p>
			I‘ve also seen tooling and CI code check for the{' '}
			<code>yarn.lock</code> file, and run a different set of commands if
			detected.
		</p>

		<p>
			The JavaScript ecosystem is complex enough. Do we neally need Yarn
			in the mix too?
		</p>

		<p>
			I wish the Yarn team would contribute their improvements into npm
			itself to simplify our lives.
		</p>

		<h2>npm rocks!</h2>

		<p>
			After switching back to npm, I realised my shell setup autocompletes{' '}
			<code>npm run</code> commands by scanning package.json scripts:
		</p>

		<ImgBlock image={props.data.imgAutocomplete} />

		<p>
			Sure, Yarn might eventually have this support (and possibly already
			does). But npm has the advantage of years and years of community
			support and tooling.
		</p>

		<p>
			npm are also bringing out some killer features. Run{' '}
			<code>npm audit</code> to scan your project for vulnerabilities. Use{' '}
			<code>npx</code> to run one-off commands (eg:{' '}
			<code>npx create-react-app</code> instead of installing{' '}
			<code>create-react-app</code> globally).
		</p>

		<p>
			<strong>Give npm another shot.</strong>
		</p>

		<p>
			It‘s fast. It‘s battle-tested. It has years of community support and
			tooling (like{' '}
			<Link to="https://github.com/creationix/nvm">nvm</Link>,{' '}
			<Link to="https://github.com/tj/n">n</Link>, and the shell
			autocomplete above). It‘s reguarly updated with awesome features.
			Popular modules like{' '}
			<Link to="https://github.com/lerna/lerna">Lerna</Link> and{' '}
			<Link to="https://github.com/dylang/npm-check">npm-check</Link>{' '}
			achieve Yarn‘s extra features.
		</p>

		<p>
			If you‘re writing javascript then you already have npm installed.
			Simplify your dev tools and use npm again. And if you miss Yarn, let
			me know why in the comments below!
		</p>
	</div>
);
