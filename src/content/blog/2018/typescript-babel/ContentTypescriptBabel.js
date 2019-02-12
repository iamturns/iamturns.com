// @flow

import * as React from "react";

import CodeBlock from "../../../../components/CodeBlock";
import Emoji from "../../../../components/Emoji";
import ImgBlock from "../../../../components/ImgBlock";
import LayoutContent from "../../../../components/LayoutContent";
import Link from "../../../../components/Link";
import type { Content } from "../../../../types/Content";
import type { Image } from "../../../../types/Image";
import type { Result } from "../../../../types/Result";
import { createImage } from "../../../../utils/image";
import ImgConsole from "./console.gif";

const IMG_CONSOLE = createImage(ImgConsole, 372, 340);

export const frontmatter = {
	title: "TypeScript With Babel: A Beautiful Marriage",
	description:
		"TypeScript has never been easier thanks to the TypeScript plugin for Babel. Discover 4 reasons why TypeScript + Babel are a perfect pair, and follow a step-by-step guide to upgrade to TypeScript in 10 minutes.",
	slug: "/typescript-babel",
	dateCreated: "2018-08-29",
	dateUpdated: "2019-02-12",
	type: "article",
	cover: "./header.jpg",
	shareImage: "./header.jpg",
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentTypescriptBabelQuery($slug: String!) {
		...CurrentContent
		...ContentList
		imgBabelSupport: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel/babel-support.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 476) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgBabelTypescript: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel/babel-typescript.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 576) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgCompatTable: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel/compat-table.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 576) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgCRABrowserlist: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel/create-react-app-browserlist.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 226) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgDevSurvey: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel/dev-survey.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 536) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgLove: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel/love.jpg" }
		) {
			childImageSharp {
				sizes(maxWidth: 576) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgOptionalChaining: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel/optional-chaining.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 356) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgSimplyConfigureTypescript: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel/simply-configure-typescript.jpg" }
		) {
			childImageSharp {
				sizes(maxWidth: 568) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgYeah: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel/yeah.jpg" }
		) {
			childImageSharp {
				sizes(maxWidth: 576) {
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
		imgBabelSupport: Image,
		imgBabelTypescript: Image,
		imgCompatTable: Image,
		imgCRABrowserlist: Image,
		imgDevSurvey: Image,
		imgLove: Image,
		imgOptionalChaining: Image,
		imgSimplyConfigureTypescript: Image,
		imgYeah: Image,
	},
};

const ContentTypescriptBabel = (props: ContentProps) => (
	<LayoutContent
		currentContent={props.data.currentContent}
		contentListResult={props.data.contentListResult}
	>
		<Article {...props} />
	</LayoutContent>
);

export default ContentTypescriptBabel;

const Article = (props: ContentProps) => (
	<div className="wysiwyg">
		<ImgBlock image={props.data.imgBabelTypescript} alt="Babel and TypeScript" />

		<p>
			<Link to="https://www.typescriptlang.org/">TypeScript</Link> has never been easier thanks to
			the{" "}
			<Link to="https://babeljs.io/docs/en/babel-preset-typescript.html">
				TypeScript plugin for Babel
			</Link>{" "}
			(<code>@babel/preset-typescript</code>
			), an official year-long collaboration between the TypeScript and Babel teams. Discover 4
			reasons why TypeScript and Babel are a perfect pair, and follow a step-by-step guide to
			upgrade to TypeScript in 10 minutes.
		</p>

		<h2>Huh? What? Why?</h2>
		<p>I didn’t understand the need for this new preset at first.</p>
		<p>
			Aren’t Babel and TypeScript two completely different things? How can Babel handle the
			TypeScript type checking? TypeScript can already output to ES5 just like Babel can, so what’s
			the point? Isn’t merging Babel and TypeScript complicating things?
		</p>
		<p>
			After hours of research, my conclusion:
			<br />
			<strong>TypeScript and Babel are a beautiful marriage.</strong>
		</p>
		<p>Let me show you.</p>
		<h2>1) You already use Babel (or should).</h2>
		<p>You’re in one of these three categories:</p>
		<ol>
			<li>
				You already use Babel. If not directly, then your Webpack config feeds <code>*.js</code>{" "}
				files into Babel (this is the case for most boilerplates, including{" "}
				<Link to="https://github.com/facebook/create-react-app">create-react-app</Link>
				).
			</li>
			<li>
				You use Typescript <em>without</em> Babel. Consider adding Babel to your arsenal, it
				provides many unique features. Read on.
			</li>
			<li>You don’t use Babel? It’s time to jump on board.</li>
		</ol>
		<h3>Write modern JavaScript without breaking anything.</h3>
		<p>
			Your JavaScript code needs to run in an old browser? No problem, Babel converts the code and
			makes everything a-okay. Use the latest and greatest features without worry.
		</p>
		<p>
			The TypeScript compiler has a similar feature, enabled by setting <code>target</code> to
			something like <code>ES5</code> or <code>ES6</code>. But the Babel configuration improves on
			this with <Link to="https://babeljs.io/docs/en/babel-preset-env/">babel-preset-env</Link>.
			Instead of locking in a specific set of JavaScript features (ES5, ES6, etc), you list the
			environments you need to support:
		</p>
		<CodeBlock
			language="json"
			code={`
				"targets": {
					"browsers": ["last 2 versions", "safari >= 7"],
					"node": "6.10"
				}
			`}
		/>
		<p>
			Babel uses <Link to="https://kangax.github.io/compat-table/">compat-table</Link> to check
			which JavaScript features to convert and polyfill for those specific target environments.
		</p>
		<ImgBlock image={props.data.imgCompatTable} alt="compat-table">
			Take a moment to appreciate the genius who named this project ‘
			<Link to="https://kangax.github.io/compat-table/">compat-table</Link>
			’.
		</ImgBlock>
		<p>
			An interesting technique used by{" "}
			<Link to="https://github.com/facebook/create-react-app/blob/96ba7bddc1600d6f5dac9da2418ee69793c22eca/packages/react-scripts/package.json#L82-L94">
				create-react-app
			</Link>
			: compile with the latest browsers during development (for speed), and compile with a larger
			range of browsers in production (for compatibility). Nice.
		</p>
		<h3>Babel is super configurable.</h3>
		<p>
			Want JSX? Flow? TypeScript? Just install a plugin and Babel can handle it. There’s a huge
			selection of <Link to="https://babeljs.io/docs/en/plugins">official plugins</Link>, mostly
			covering upcoming JavaScript syntax. And there’s plenty of third-party plugins too:{" "}
			<Link to="https://github.com/lodash/babel-plugin-lodash">improve lodash imports</Link>,{" "}
			<Link to="https://github.com/mattphillips/babel-plugin-console">enhance console.log</Link>, or{" "}
			<Link to="https://github.com/betaorbust/babel-plugin-groundskeeper-willie">
				strip console.log
			</Link>
			. Find more on the <Link to="https://github.com/babel/awesome-babel">awesome-babel</Link>{" "}
			list.
		</p>
		<p>
			But be careful. If the plugin alters the syntax significantly, then TypeScript may be unable
			to parse it. For example, the highly anticipated{" "}
			<Link to="https://github.com/tc39/proposal-optional-chaining">
				optional chaining proposal
			</Link>{" "}
			has a Babel plugin:
		</p>
		<ImgBlock image={props.data.imgOptionalChaining} alt="Optional chaining">
			<Link to="https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining.html">
				@babel/plugin-proposal-optional-chaining
			</Link>
		</ImgBlock>
		<p>But unfortunately TypeScript is unable to understand this updated syntax.</p>

		<p>Don’t stress, there’s an alternative…</p>
		<p />

		<h3>Babel Macros</h3>
		<p>
			You know <Link to="https://twitter.com/kentcdodds">Kent C Dodds</Link>? He’s created a
			game-changing Babel plugin:{" "}
			<Link to="https://github.com/kentcdodds/babel-plugin-macros">babel-plugin-macros</Link>.
		</p>
		<p>
			Instead of adding plugins to your Babel config file, you install the macro as a dependency and
			import it within your code. The macro kicks in when Babel is compiling, and modifies the code
			however it likes.
		</p>
		<p>
			Here’s an example. Using <Link to="https://www.npmjs.com/package/idx.macro">idx.macro</Link>{" "}
			to scratch our itch until{" "}
			<Link to="https://github.com/tc39/proposal-optional-chaining">
				optional chaining proposal
			</Link>{" "}
			arrives.
		</p>
		<CodeBlock
			language="js"
			code={`
				import idx from 'idx.macro';

				const friends = idx(
					props,
					_ => _.user.friends[0].friends
				);
			`}
		/>
		<p>Compiles to:</p>
		<CodeBlock
			language="js"
			code={`
				const friends =
					props.user == null ? props.user :
					props.user.friends == null ? props.user.friends :
					props.user.friends[0] == null ? props.user.friends[0] :
					props.user.friends[0].friends
			`}
		/>

		<p>
			Macros are pretty new, but quickly gaining traction. Especially since landing in{" "}
			<Link to="https://reactjs.org/blog/2018/10/01/create-react-app-v2.html">
				create-react-app v2.0
			</Link>
			. CSS in JS is covered:{" "}
			<Link to="https://www.npmjs.com/package/styled-jsx#using-resolve-as-a-babel-macro">
				styled-jsx
			</Link>
			,{" "}
			<Link to="https://www.styled-components.com/docs/tooling#babel-macro">styled-components</Link>
			, and <Link to="https://emotion.sh/docs/babel-plugin-emotion#babel-macros">emotion</Link>.
			Webpack plugins are being ported over:{" "}
			<Link to="https://github.com/pveyes/raw.macro">raw-loader</Link>,{" "}
			<Link to="https://github.com/Andarist/data-uri.macro">url-loader</Link>, and{" "}
			<Link to="https://www.npmjs.com/package/filesize.macro">filesize-loader</Link>. And many more
			listed on{" "}
			<Link to="https://github.com/jgierer12/awesome-babel-macros">awesome-babel-macros</Link>.
		</p>

		<p>
			Here’s the best part: unlike Babel plugins, <em>all</em> Babel macros are compatible with
			TypeScript. They can also help reduce run-time dependencies, avoid client-side computation,
			and catch errors earlier at build-time. Check out{" "}
			<Link to="https://babeljs.io/blog/2017/09/11/zero-config-with-babel-macros">this post</Link>{" "}
			for more details.
		</p>

		<ImgBlock image={IMG_CONSOLE} alt="Improved console.log">
			A better console.log:{" "}
			<Link to="https://github.com/mattphillips/babel-plugin-console#macros">scope.macro</Link>
		</ImgBlock>

		<h2>2) It’s easier to manage ONE compiler.</h2>
		<p>
			TypeScript requires it’s own compiler — it’s what provides the amazing type checking
			superpowers.
		</p>
		<h3>In the gloomy days (before Babel 7).</h3>
		<p>
			Chaining together two separate compilers (TypeScript and Babel) is no easy feat. The
			compilation flow becomes: <code>{`TS > TS Compiler > JS > Babel > JS (again)`}</code>.
		</p>
		<p>
			Webpack is often used to solve this problem. Tweak your Webpack config to feed{" "}
			<code>*.ts</code> into TypeScript, and then feed the result into Babel. But which TypeScript
			loader do you use? Two popular choices are{" "}
			<Link to="https://github.com/TypeStrong/ts-loader">ts-loader</Link> and{" "}
			<Link to="https://github.com/s-panferov/awesome-typescript-loader">
				awesome-typescript-loader
			</Link>
			. The <code>README.md</code> for{" "}
			<Link to="https://github.com/s-panferov/awesome-typescript-loader">
				awesome-typescript-loader
			</Link>{" "}
			mentions it might be slower for some workloads, and recommends{" "}
			<Link to="https://github.com/TypeStrong/ts-loader">ts-loader</Link> with{" "}
			<Link to="https://github.com/amireh/happypack">HappyPack</Link> or{" "}
			<Link to="https://webpack.js.org/loaders/thread-loader/">thread-loader</Link>. The{" "}
			<code>README.md</code> for <Link to="https://github.com/TypeStrong/ts-loader">ts-loader</Link>{" "}
			recommends combining with{" "}
			<Link to="https://github.com/Realytics/fork-ts-checker-webpack-plugin">
				fork-ts-checker-webpack-plugin
			</Link>
			, <Link to="https://github.com/amireh/happypack">HappyPack</Link>,{" "}
			<Link to="https://github.com/webpack-contrib/thread-loader">thread-loader</Link>, and / or{" "}
			<Link to="https://github.com/webpack-contrib/cache-loader">cache-loader</Link>.
		</p>
		<p>
			Eugh. No. This is where most people get overwhelmed and put TypeScript in the “too hard”
			basket. I don’t blame them.
		</p>
		<ImgBlock
			image={props.data.imgSimplyConfigureTypescript}
			alt="One does not simply configure TypeScript"
		/>
		<h3>The bright sunny days (with Babel 7).</h3>
		<p>
			Wouldn’t it be nice to have <em>one</em> JavaScript compiler? Whether your code has ES2015
			features, JSX, TypeScript, or something crazy custom — the compiler knows what to do.
		</p>
		<p>I just described Babel. Cheeky.</p>
		<p>
			By allowing Babel to act as the single compiler, there’s no need to manage, configure, or
			merge two compilers with some convoluted Webpack sorcery.
		</p>
		<p>
			It also simplifies the entire JavaScript ecosystem. Instead of linters, test runners, build
			systems, and boilerplates supporting different compilers, they just need to support Babel. You
			then configure Babel to handle your specific needs. Say goodbye to{" "}
			<Link to="https://github.com/TypeStrong/ts-node">ts-node</Link>,{" "}
			<Link to="https://github.com/kulshekhar/ts-jest">ts-jest</Link>,{" "}
			<Link to="https://github.com/monounity/karma-typescript">ts-karma</Link>,{" "}
			<Link to="https://github.com/wmonk/create-react-app-typescript">
				create-react-app-typescript
			</Link>
			, etc, and use the Babel support instead. Support for Babel is everywhere, checkout the{" "}
			<Link to="https://babeljs.io/en/setup">Babel setup</Link> page:
		</p>
		<ImgBlock image={props.data.imgBabelSupport} alt="Babel and TypeScript">
			<Link to="https://babeljs.io/en/setup">Babel has you covered.</Link>
		</ImgBlock>
		<h2>3) It’s faster to compile.</h2>
		<p>
			<mark>Warning!</mark> You might want to sit down for this bit.
		</p>
		<p>
			How does Babel handle TypeScript code? <strong>It removes it.</strong>
		</p>
		<p>
			Yep, it strips out all the TypeScript, turns it into “regular” JavaScript, and continues on
			its merry way.
		</p>
		<p>This sounds ridiculous, but this approach has two strong advantages.</p>
		<p>
			The first advantage: ️<Emoji>⚡️</Emoji>
			<em>IT’S LIGHTNING FAST</em> <Emoji>⚡️</Emoji>.
		</p>
		<p>
			Most Typescript developers experience slow compilation times during development / watch mode.
			You’re coding away, you save a file, and… then… here it comes… annnnd… <em>finally</em>, you
			see your change. Oops, made a typo, fix that, save it, annnnd… eugh. It’s <em>just</em> slow
			enough to be annoying and break your momentum.
		</p>
		<p>
			It’s hard to blame the TypeScript compiler, it’s doing a lot of work. It’s scanning for type
			definition files (<code>*.d.ts</code>
			), including within <code>node_modules</code>, and ensuring your code is used correctly. This
			is why many fork the Typescript type checking into a separate process. However the Babel +
			TypeScript combo still provides faster compilation thanks to Babel’s superior caching and
			single-file emit architecture.
		</p>
		<p>
			So, if Babel strips out TypeScript code, what’s the point in writing TypeScript? That brings
			us to the second advantage…
		</p>
		<h2>4) Check for type errors only when you’re ready.</h2>
		<p>
			You’re hacking some code together, quickly bashing out a solution to see if your idea has
			legs. You save the file, and TypeScript screams at you:
		</p>
		<blockquote>“No! I won’t compile this! Your code is broken in 42 different files!”</blockquote>
		<p>
			Yeah, you <em>know</em> it’s broken. You’ve probably broken a few unit tests too. But you’re
			just experimenting at this point. It’s infuriating to continuously ensure <em>all</em> your
			code is type safe <em>all</em> the time.
		</p>
		<p>
			This is the second advantage of Babel stripping out TypeScript code during compilation. You
			write code, you save, and it compiles (very quickly) <em>without</em> checking for type
			safety. Keep experimenting with your solution until you’re ready to check the code for errors.
			This workflow keeps you in the zone as you’re coding.
		</p>
		<p>
			So how do you check for type errors? Add a <code>npm run check-types</code> script that
			invokes the TypeScript compiler. I tweak my <code>npm test</code> command to first check
			types, and then continue running unit tests.
		</p>
		<h2>It’s not a perfect marriage.</h2>
		<p>
			According to the{" "}
			<Link to="https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/">
				announcement post
			</Link>
			, there are four TypeScript features that do not compile in Babel due to its single-file emit
			architecture.
		</p>
		<p>
			Don’t worry, it ain’t so bad. And TypeScript will warn against these issues when the{" "}
			<code>isolatedModules</code> flag is enabled.
		</p>
		<p>
			<strong>1) Namespaces.</strong>
		</p>
		<p>
			Solution: don’t use them! They’re outdated. Use the industry standard ES6 modules (
			<code>import</code> / <code>export</code>) instead. The{" "}
			<Link to="https://github.com/palantir/tslint/blob/21358296ad11a857918b45e6a9cc628290dc3f96/src/configs/recommended.ts#L89">
				recommended tslint rules
			</Link>{" "}
			ensure namespaces are <em>not</em> used.
		</p>
		<p>
			<strong>2) Casting a type with the</strong>
			<code>{`<newtype>x`}</code>
			<strong> syntax.</strong>
		</p>
		<p>
			Solution: Use <code>x as newtype</code> instead.
		</p>
		<p>
			<strong>
				3){" "}
				<Link to="https://www.typescriptlang.org/docs/handbook/enums.html#const-enums">
					Const enums
				</Link>
				.
			</strong>
		</p>
		<p>This is a shame. Need to resort to regular enums for now.</p>
		<p>
			<strong>4) Legacy-style import / export syntax.</strong>
		</p>
		<p>
			Examples: <code>import foo = require(...)</code> and <code>export = foo</code>.
		</p>
		<p>
			In all my years of TypeScriptin’ I’ve never come across this. Who codes this way? Stop it!
		</p>
		<h2>Ok, I’m ready to try TypeScript with Babel!</h2>
		<ImgBlock image={props.data.imgYeah} alt="Yeah!">
			Photo by{" "}
			<Link to="https://www.rawpixel.com/image/384992/yeah-text-paper-and-colorful-party-confetti-background-party-concept">
				rawpixel.com
			</Link>
		</ImgBlock>
		<p>Let’s do this! It should only take about 10 minutes.</p>
		<p>
			I’m assuming you have Babel 7 setup. If not, see the{" "}
			<Link to="https://babeljs.io/docs/en/v7-migration.html">Babel Migration Guide</Link>.
		</p>
		<p>
			<strong>1) Rename .js files to .ts</strong>
		</p>
		<p>
			Assuming your files are in <code>/src</code>:
		</p>
		<CodeBlock
			language="bash"
			// eslint-disable-next-line
			code={`find src -name "*.js" -exec sh -c 'mv "$0" "\${0%.js}.ts"' {} \;`}
		/>
		<p>
			<strong>2) Add TypeScript to Babel</strong>
		</p>
		<p>A few dependencies:</p>
		<CodeBlock code="npm install --save-dev @babel/preset-typescript @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread" />
		<p>
			In your Babel config file (<code>.babelrc</code> or <code>babel.config.js</code>
			):
		</p>
		<CodeBlock
			language="json"
			code={`
				{
					"presets": [
							"@babel/typescript"
					],
					"plugins": [
							"@babel/proposal-class-properties",
							"@babel/proposal-object-rest-spread"
					]
				}
			`}
		/>
		<p>
			TypeScript has a couple of extra features which Babel needs to know about (via those two
			plugins listed above).
		</p>
		<p>
			Babel looks for .js files by default, and sadly this is not configurable within the Babel
			config file.
		</p>
		<p>
			If you use Babel CLI, add <code>--extensions &apos;.ts&apos;</code>
		</p>
		<p>
			If you use Webpack, add <code>&apos;ts&apos;</code> to <code>resolve.extensions</code> array.
		</p>
		<p>
			<strong>3) Add ‘check-types’ command</strong>
		</p>
		<p>
			In <code>package.json</code>:
		</p>
		<CodeBlock
			language="json"
			code={`
				"scripts": {
					"check-types": "tsc"
				}
			`}
		/>
		<p>
			This command simply invokes the TypeScript compiler (<code>tsc</code>
			).
		</p>
		<p>
			Where does <code>tsc</code> come from? We need to install TypeScript:
		</p>
		<CodeBlock code={`npm install --save-dev typescript`} />
		<p>
			To configure TypeScript (and <code>tsc</code>
			), we need a <code>tsconfig.json</code> file in the root directory:
		</p>
		<CodeBlock
			language="json"
			code={`
				{
					"compilerOptions": {
						// Target latest version of ECMAScript.
						"target": "esnext",
						// Search under node_modules for non-relative imports.
						"moduleResolution": "node",
						// Process & infer types from .js files.
						"allowJs": true,
						// Don't emit; allow Babel to transform files.
						"noEmit": true,
						// Enable strictest settings like strictNullChecks & noImplicitAny.
						"strict": true,
						// Disallow features that require cross-file information for emit.
						"isolatedModules": true,
						// Import non-ES modules as default imports.
						"esModuleInterop": true
					},
					"include": [
						"src"
					]
				}
			`}
		/>
		<p>
			<strong>Done.</strong>
		</p>
		<p>
			Well, the <em>setup</em> is done. Now run <code>npm run check-types</code> (watch mode:{" "}
			<code>npm run check-types -- --watch</code>) and ensure TypeScript is happy with your code.
			Chances are you’ll find a few bugs you didn’t know existed. This is a good thing! The{" "}
			<Link to="https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html">
				Migrating from Javascript
			</Link>{" "}
			guide will help here.
		</p>
		<p>
			Microsoft’s{" "}
			<Link to="https://github.com/Microsoft/TypeScript-Babel-Starter">
				TypeScript-Babel-Starter
			</Link>{" "}
			guide contains additional setup instructions, including installing Babel from scratch,
			generating type definition (d.ts) files, and using it with React.
		</p>
		<h3>I’m using create-react-app.</h3>
		<p>
			It’s a little fiddly, but still possible! First,{" "}
			<Link to="https://github.com/facebook/create-react-app/issues/3815">
				upgrade to create-react-app v2.0 (beta)
			</Link>
			. Then setup <Link to="https://github.com/timarney/react-app-rewired">react-app-rewired</Link>
			, which lets you override parts of the configuration. And finally, install this rewired
			plugin:{" "}
			<Link to="https://github.com/strothj/react-app-rewire-typescript-babel-preset">
				react-app-rewire-typescript-babel-preset
			</Link>
			.
		</p>
		<h2>What about linting?</h2>
		<p>
			<strike>
				Use <Link to="https://palantir.github.io/tslint/">tslint</Link>.
			</strike>
		</p>
		<p>
			<strong>Update</strong> (Feb 2019): Use ESlint! The TypeScript team are{" "}
			<Link to="https://github.com/Microsoft/TypeScript/issues/29288">
				focusing on ESLint integration
			</Link>{" "}
			since January. It’s easy to configure ESLint thanks to the{" "}
			<Link to="https://github.com/typescript-eslint/typescript-eslint">@typesript-eslint</Link>{" "}
			project. For inspiration, check out my{" "}
			<Link to="https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js">
				mega ESLint config
			</Link>{" "}
			which includes TypeScript, Airbnb, Prettier, and React.
		</p>

		<h2>Babel + TypeScript = Beautiful Marriage.</h2>
		<ImgBlock image={props.data.imgLove} alt="Love hearts">
			Photo by <Link to="https://unsplash.com/photos/1GRvY9WUu08">Akshar Dave</Link>
		</ImgBlock>
		<p>
			Babel is the one-and-only JavaScript compiler you need. It can be configured to handle
			anything.
		</p>
		<p>
			There’s no need to battle with two competing JavaScript compilers. Simplify your project
			configuration and take advantage of Babel’s amazing integration with linters, test runners,
			build systems, and boilerplates.
		</p>
		<p>
			The Babel and TypeScript combo is lightning fast to compile, and allows you to stay in the
			zone as you code, and check types only when you’re ready.
		</p>
		<h2>Prediction: TypeScript will rise.</h2>
		<p>
			According to the most recent{" "}
			<Link to="https://insights.stackoverflow.com/survey/2018/#technology-programming-scripting-and-markup-languages">
				Stack Overflow Developer Survey
			</Link>
			, JavaScript is the most popular language, with TypeScript trailing at #12. This is still a
			great achievement for TypeScript, beating out Ruby, Swift, and Go.
		</p>
		<ImgBlock image={props.data.imgDevSurvey} alt="Developer survey results" />
		<p>I predict TypeScript will crack the top 10 by next year.</p>
		<p>
			The TypeScript team are working hard to spread the love. This Babel preset was a year long
			collaboration, and their new focus is on{" "}
			<Link to="https://github.com/Microsoft/TypeScript/issues/29288">
				improving ESLint integration
			</Link>
			. This is a smart move — leverage the features, community, and plugins of existing tools. To
			develop competing compilers and linters is wasted effort.
		</p>
		<p>
			The path to TypeScript is paved by simply tweaking the config of our favourite tools. The
			barrier to entry has been smashed.
		</p>
		<p>
			With the rise in popularity of <Link to="https://code.visualstudio.com/">VS Code</Link>,
			developers are already setup with an amazing TypeScript environment. Autocomplete on steroids
			will bring tears of joy.
		</p>
		<p>
			It’s also now integrated into{" "}
			<Link to="https://reactjs.org/blog/2018/10/01/create-react-app-v2.html">
				create-react-app v2.0
			</Link>
			, exposing TypeScript to an audience of 200k downloads per month.
		</p>
		<p>
			If you’ve been put off by TypeScript because it’s difficult to setup, it’s no longer an
			excuse. It’s time to give it a go.
		</p>
	</div>
);
