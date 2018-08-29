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
	title: "TypeScript and Babel 7: a beautiful marriage",
	description:
		"Babel 7 and TypeScript are a great match. Learn 4 reasons why, and a step-by-step guide to try it out.",
	slug: "/typescript-babel-7",
	dateCreated: "2018-08-29",
	dateUpdated: "2018-08-29",
	type: "article",
	cover: "./header.jpg",
	shareImage: "./header.jpg",
};

declare var graphql: Function;
export const pageQuery = graphql`
	query ContentTypescriptBabel7Query($slug: String!) {
		...CurrentContent
		...ContentList
		imgBabelSupport: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel-7/babel-support.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 476) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgBabelTypescript: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel-7/babel-typescript.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 576) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgCompatTable: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel-7/compat-table.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 576) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgCRABrowserlist: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel-7/create-react-app-browserlist.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 226) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgDevSurvey: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel-7/dev-survey.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 536) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgLove: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel-7/love.jpg" }
		) {
			childImageSharp {
				sizes(maxWidth: 576) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgOptionalChaining: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel-7/optional-chaining.png" }
		) {
			childImageSharp {
				sizes(maxWidth: 356) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgSimplyConfigureTypescript: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel-7/simply-configure-typescript.jpg" }
		) {
			childImageSharp {
				sizes(maxWidth: 568) {
					...GatsbyImageSharpSizes
				}
			}
		}
		imgYeah: file(
			sourceInstanceName: { eq: "content" }
			relativePath: { eq: "blog/2018/typescript-babel-7/yeah.jpg" }
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

const ContentTypescriptBabel7 = (props: ContentProps) => (
	<LayoutContent
		currentContent={props.data.currentContent}
		contentListResult={props.data.contentListResult}
	>
		<Article {...props} />
	</LayoutContent>
);

export default ContentTypescriptBabel7;

const Article = (props: ContentProps) => (
	<div className="wysiwyg">
		<ImgBlock image={props.data.imgBabelTypescript} alt="Babel and TypeScript" />
		<p>
			<Link to="https://babeljs.io/blog/2018/08/27/7.0.0">Babel 7</Link> has landed with an official
			collaboration between the TypeScript and Babel teams:{" "}
			<Link to="https://babeljs.io/docs/en/babel-preset-typescript.html">
				@babel/preset-typescript
			</Link>
			.
		</p>
		<h2>Huh? What? Why?</h2>
		<p>I didn’t understand the need for this preset at first.</p>
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
		<h2>You already use Babel (or should).</h2>
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
			something like <code>"ES5"</code> or <code>"ES6"</code>. But the Babel configuration improves
			on this with <Link to="https://babeljs.io/docs/en/babel-preset-env/">babel-preset-env</Link>.
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
			Take a moment to appreciate the genius who named this project '
			<Link to="https://kangax.github.io/compat-table/">compat-table</Link>
			'.
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
			Want React with JSX? Flow? TypeScript? The shiny new{" "}
			<Link to="https://github.com/tc39/proposal-optional-chaining">optional chaining</Link>{" "}
			proposal? Just install a plugin and let Babel handle it.
		</p>
		<ImgBlock image={props.data.imgOptionalChaining} alt="Optional chaining">
			<Link to="https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining.html">
				@babel/plugin-proposal-optional-chaining
			</Link>
		</ImgBlock>
		<p>
			There’s also a great selection of third-party Babel plugins. Using Styled Components? Improve{" "}
			<Link to="https://github.com/styled-components/babel-plugin-styled-components">
				server side rendering
			</Link>
			. Using Ramda?{" "}
			<Link to="https://github.com/haskellcamargo/babel-plugin-function-composition">
				Easily compose functions
			</Link>
			. Want more?{" "}
			<Link to="https://github.com/ember-cli/babel-plugin-feature-flags">Manage feature flags</Link>
			, <Link to="https://github.com/lodash/babel-plugin-lodash">improve lodash imports</Link>,{" "}
			<Link to="https://github.com/mattphillips/babel-plugin-console">enhance console.log</Link>, or{" "}
			<Link to="https://github.com/betaorbust/babel-plugin-groundskeeper-willie">
				strip console.log
			</Link>
			. Whatever floats your boat, you’ll find it on this mega list:{" "}
			<Link to="https://github.com/babel/awesome-babel">awesome-babel</Link>.
		</p>
		<ImgBlock image={IMG_CONSOLE} alt="Improved console.log">
			Better than console.log:{" "}
			<Link to="https://github.com/mattphillips/babel-plugin-console">babel-plugin-console</Link>
		</ImgBlock>
		<h3>Macros!</h3>
		<p>
			You know <Link to="https://twitter.com/kentcdodds">Kent C Dodds</Link>? He’s created a
			game-changing Babel plugin:{" "}
			<Link to="https://github.com/kentcdodds/babel-plugin-macros">babel-plugin-macros</Link>.
		</p>
		<p>
			Instead of adding plugins to your Babel config file, you import macros directly in your
			JavaScript code. At build time, the macro kicks in and modifies the code. Check out{" "}
			<Link to="https://babeljs.io/blog/2017/09/11/zero-config-with-babel-macros">this post</Link>{" "}
			for more details.
		</p>
		<p>
			I think Babel macros will explode this year. Not only is it an amazing concept, but it’s
			already integrated into{" "}
			<Link to="https://github.com/facebook/create-react-app/issues/3815">
				create-react-app v2.0 (beta)
			</Link>
			, which pushes the community support.
		</p>
		<h2>It’s easier to manage ONE compiler.</h2>
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
		<h2>It’s faster to compile.</h2>
		<p>
			<mark>Warning!</mark> You might want to sit down for this bit.
		</p>
		<p>
			How does Babel 7 handle TypeScript code? <strong>It removes it.</strong>
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
			is why many fork the Typescript type checking into a separate process. However the Babel 7 +
			TypeScript combo still provides faster compilation thanks to Babel’s superior caching and
			single-file emit architecture.
		</p>
		<p>
			So, if Babel strips out TypeScript code, what’s the point in writing TypeScript? That brings
			us to the second advantage…
		</p>
		<h2>Check for type errors only when you’re ready.</h2>
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
			, there are four TypeScript features that do not compile in Babel 7 due to its single-file
			emit architecture.
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
			<strong>3) Enums that span multiple declarations (i.e. enum merging).</strong>
		</p>
		<p>
			I’m not sure what this is. I have searched online for “enum merging” and found nothing. Can
			anyone help? Please let me know in the comments!
		</p>
		<p>
			<strong>4) Legacy-style import / export syntax.</strong>
		</p>
		<p>
			Examples: <code>import foo = require(...)</code> and <code>export = foo</code>.
		</p>
		<p>
			In all my years of TypeScriptin’ I’ve never come across this. Who codes this way? Stop it!
		</p>
		<h2>I want to add TypeScript to Babel 7.</h2>
		<ImgBlock image={props.data.imgYeah} alt="Yeah!">
			Photo by{" "}
			<Link to="https://www.rawpixel.com/image/384992/yeah-text-paper-and-colorful-party-confetti-background-party-concept">
				rawpixel.com
			</Link>
		</ImgBlock>
		<p>Let’s do this.</p>
		<p>
			I’m assuming you have Babel 7 setup. If not, see the{" "}
			<Link to="https://babeljs.io/docs/en/v7-migration.html">Babel Migration Guide</Link>.
		</p>
		<p>
			<strong>Install dependencies</strong>
		</p>
		<CodeBlock code="npm install --save-dev typescript @babel/preset-typescript @babel/proposal-class-properties @babel/proposal-object-rest-spread" />
		<p>
			<strong>Configure Babel</strong>
		</p>
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
			TypeScript has a couple of extra features which Babel needs to know about via those two
			proposal plugins.
		</p>
		<p>
			<strong>Configure TypeScript</strong>
		</p>
		<p>
			Create a <code>tsconfig.json</code> file in the root directory:
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
			<strong>Add ‘check-types’ command</strong>
		</p>
		<p>
			The command simply invokes the TypeScript compiler (<code>tsc</code>
			), which reads from the config defined above.
		</p>
		<p>
			In <code>package.json </code>
			file:
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
			<strong>Rename .js files to .ts</strong>
		</p>
		<CodeBlock
			language="bash"
			code={`find src -name "*.js" -exec sh -c 'mv "$0" "\${0%.js}.ts"' {} \;`}
		/>
		<p>
			<strong>Modify Babel to look for .ts files</strong>
		</p>
		<p>
			Babel looks for .js files by default, and sadly this is not configurable within the Babel
			config file.
		</p>
		<p>
			If you use Babel CLI, add <code>--extensions '.ts'</code>
		</p>
		<p>
			If you use Webpack, add <code>'ts'</code> to <code>resolve.extensions</code> array.
		</p>
		<p>
			<strong>Done!</strong>
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
			guide contains additional setup instructions, including installing Babel 7 from scratch,
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
			Use <Link to="https://palantir.github.io/tslint/">tslint</Link>.
		</p>
		<CodeBlock code={`npm install --save-dev tslint`} />
		<p>
			Create a <code>tslint.json</code> file in the root directory:
		</p>
		<CodeBlock
			language="json"
			code={`
				{
					"defaultSeverity": "error",
					"extends": [
						"tslint:latest",
					],
					"jsRules": {},
					"rules": {},
					"rulesDirectory": [],
					"linterOptions": {
						"exclude": ["**/node_modules/**"]
					}
				}
			`}
		/>
		<p>
			Setup a lint command in <code>package.json</code> file:
		</p>
		<CodeBlock
			language="json"
			code={`
				"scripts": {
					"lint": "tslint '**/*.ts'"
				}
			`}
		/>
		<p>
			That’s it! Now call <code>npm run lint</code> to lint your project. If you're using VS Code,
			install the <Link to="https://github.com/Microsoft/vscode-tslint/">vscode-lint</Link>{" "}
			extension for red squiggly lines.
		</p>
		<p>
			If you use <Link to="https://github.com/prettier/prettier">Prettier</Link> to automatically
			format your code, keep using it! It has built-in support for TypeScript files. Integrate with
			linting using{" "}
			<Link to="https://github.com/alexjoverm/tslint-config-prettier">tslint-config-prettier</Link>.
		</p>
		<p>
			If you use React, you might enjoy some React rules provided by{" "}
			<Link to="https://github.com/palantir/tslint-react">tslint-react</Link>.
		</p>
		<p>
			Alternatively, you can keep <Link to="https://eslint.org/">eslint</Link> and use{" "}
			<Link to="https://github.com/eslint/typescript-eslint-parser">typescript-eslint-parser</Link>{" "}
			with{" "}
			<Link to="https://github.com/nzakas/eslint-plugin-typescript">eslint-plugin-typescript</Link>{" "}
			to add TypeScript rules. I haven’t tried this combination — please let me know in the comments
			if this works better than tslint.
		</p>
		<p>
			There’s also the <Link to="https://github.com/google/ts-style">Google TypeScript style</Link>{" "}
			project which combines zero config linting and formatting (like Prettier, but uses
			clang-format). I haven’t tried this either, and would love to know your thoughts in the
			comments.
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
			You can start with vanilla JavaScript and easily upgrade to TypeScript if you feel the need.
			The barrier to entry has been smashed thanks to Babel 7.
		</p>
		<p>
			The TypeScript team are working hard to spread the love. This Babel preset was a year long
			collaboration, and they’ve contributed heavily to{" "}
			<Link to="https://github.com/eslint/typescript-eslint-parser">typescript-eslint-parser</Link>,
			which powers <Link to="https://prettier.io/">Prettier’s</Link> TypeScript support.
		</p>
		<p>
			With the rise in popularity of <Link to="https://code.visualstudio.com/">VS Code</Link>,
			developers are already setup with an amazing TypeScript environment. Autocomplete on steroids
			will bring tears of joy.
		</p>
		<p>
			It’s also{" "}
			<Link to="https://github.com/facebook/create-react-app/issues/4146">
				likely to be integrated
			</Link>{" "}
			into <Link to="https://github.com/facebook/create-react-app">create-react-app</Link> itself,
			thanks to support from <Link to="https://twitter.com/jaredpalmer">Jared Palmer</Link> (creator
			of <Link to="https://github.com/jaredpalmer/formik">Formik</Link>,{" "}
			<Link to="https://github.com/jaredpalmer/razzle">Razzle</Link>, and{" "}
			<Link to="https://github.com/jaredpalmer/backpack/">Backpack</Link>
			). There’s a{" "}
			<Link to="https://github.com/facebook/create-react-app/pull/4837">pending pull request</Link>,
			and if accepted will expose TypeScript to an audience of 200k downloads per month.
		</p>
		<p>
			If you’ve been put off by TypeScript because it’s difficult to setup, it’s no longer an
			excuse. It’s time to give it a go.
		</p>
	</div>
);
