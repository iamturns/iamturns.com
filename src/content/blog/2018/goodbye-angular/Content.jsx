// @flow

import * as React from 'react';

import ContentA from '../../../../components/ContentA';
import ContentH2 from '../../../../components/ContentH2';
import ContentImg from '../../../../components/ContentImg';
import ContentLI from '../../../../components/ContentLI';
import ContentP from '../../../../components/ContentP';
import ContentQuote from '../../../../components/ContentQuote';
import ContentUL from '../../../../components/ContentUL';
import type { PageGoodbyeAngularProps } from './PageGoodbyeAngular';

const Content = (props: PageGoodbyeAngularProps) => (
	<div>
		<ContentP>
			I dreaded returning to programming during a 3-month travel break.
			After all these years, it seemed my passion had dried up. Time for
			something new.
		</ContentP>

		<ContentP>
			It turns out I’m not done with programming; I’m just done with
			Angular.
		</ContentP>

		<ContentH2>
			Oh, Angular… <span className="text-base">*long sigh*</span>
		</ContentH2>

		<ContentP>
			I’ve been deep diving into Angular (v1 and 2+) for three years now.
			There were some good times, but I often felt frustrated. Coding felt
			challenging for the <em>wrong</em> reasons.
		</ContentP>

		<ContentP>A fun list of things that annoyed me:</ContentP>

		<ContentUL>
			<ContentLI>
				Pointless template syntax
				<ContentUL>
					<ContentLI>
						NgIf, NgSwitch, NgFor, what a load of shit. JavaScript
						already has all these features, and I already know how
						to use JavaScript — let me use JavaScript!
					</ContentLI>
					<ContentLI>
						True story: adding <code>else</code> to{' '}
						<code>*ngIf</code> was a “new feature” in Angular v4!
					</ContentLI>
				</ContentUL>
			</ContentLI>
			<ContentLI>
				Tweaking code just so AOT compiler could parse it
			</ContentLI>
			<ContentLI>
				Zone.js sucks
				<ContentUL>
					<ContentLI>
						Errors are garbled, and integrating 3rd-party libs is a
						pain
					</ContentLI>
				</ContentUL>
			</ContentLI>
			<ContentLI>
				General over-engineering
				<ContentUL>
					<ContentLI>
						DI with factories and providers, services, ngModules,
						etc.
					</ContentLI>
					<ContentLI>
						Many projects succeed without this baggage, is it
						necessary?
					</ContentLI>
					<ContentLI>
						A lot to learn, a lot to code, and a lot to maintain
					</ContentLI>
				</ContentUL>
			</ContentLI>
		</ContentUL>

		<ContentH2>Arguments for Angular</ContentH2>

		<ContentQuote>
			“I just need to learn Angular, then I can easily jump between any
			Angular project.”
		</ContentQuote>

		<ContentP>
			This is a myth. Starting with Angular does not guarantee the entire
			project remains purely Angular. Every project becomes custom.
		</ContentP>

		<ContentP>
			If a 3rd-party plugin is better than the core plugin, developers
			shift over. Remember when UI-Router landed? Nobody used the official
			ngRouter.
		</ContentP>

		<ContentP>
			My last Angular project exploded to include a Redux store, HTTP
			calls through @ngrx/effects, and composing smaller utility functions
			instead of creating full-blown services. Could any Angular developer
			jump straight into this setup? Nope.
		</ContentP>

		<ContentQuote>
			“Code written by Angular official maintainers is better quality and
			more stable than a bunch of random 3rd-party libraries thrown
			together.”
		</ContentQuote>

		<ContentP>
			Angular has settled now, but it had massive breaking changes in the
			early days. Far from stable.
		</ContentP>

		<ContentP>Also, the official documentation had this gem:</ContentP>

		<ContentP>
			<ContentImg image={props.data.imgDocs}>
				Excerpt from the{' '}
				<ContentA to="https://github.com/angular/angular/blob/3e34ba01bdbeea237cb7c50e9cea3b0ed3b0606b/aio/content/guide/dependency-injection.md">
					official Angular docs
				</ContentA>{' '}
				about factory providers.
			</ContentImg>
		</ContentP>

		<ContentP>This is not quality.</ContentP>

		<ContentP>
			The JavaScript community is energetic, active, and passionate. A
			group of random developers can deliver code that surpasses the
			efforts of core maintainers.
		</ContentP>

		<ContentQuote>
			“I like that Angular makes choices for me, I don’t want to pick and
			choose which libraries to use.”
		</ContentQuote>

		<ContentP>
			I get it. You want to style your React project, okay: CSS Modules or
			Styled Components? Or maybe Glamorous? Oh, Emotion looks nice!
		</ContentP>

		<ContentP>
			While relying on whatever Angular provides is initially easier, it
			may not be the best for your project. Using TypeScript may be
			overkill, but is forced (the non-TS version of Angular is still
			undocumented all these years later). Using Promises for HTTP
			requests may be a better choice than being forced to use RxJS
			observables.
		</ContentP>

		<ContentP>
			Embrace the light-weight libraries that do one thing, and do it
			well. Celebrate that the JavaScript community provides you with so
			many options you can pick-and-choose based on your specific needs.
		</ContentP>

		<ContentH2>React reignites the passion</ContentH2>

		<ContentP>
			In the past weeks I’ve used{' '}
			<ContentA to="https://reactjs.org/">React</ContentA> to build this
			blog (powered by{' '}
			<ContentA to="https://www.gatsbyjs.org/">Gatsby</ContentA>).
		</ContentP>
		<ContentP>
			I can get into the flow and just code. Less uphill battles, more
			“just doing it.” Yep, I’m living the Nike slogan now, but on a
			computer.{' '}
			<span className="text-sm">
				And with <em>slightly</em> less sweat.
			</span>
		</ContentP>
		<ContentP>
			React is light in all the right places, and complex only when I need
			it to be. I start with little and build up. I choose the libraries
			that best fit my needs. Freedom and power.
		</ContentP>

		<ContentP>
			I love tying together tiny stateless components. It barely looks
			like framework specific code, and is super quick to scaffold. And,
			it‘s pretty fun!
		</ContentP>

		<ContentP>
			Relying on <ContentA to="https://prettier.io/">Prettier</ContentA>{' '}
			to style code for me is a relief. Again, fewer barriers, and more
			focus on getting the job done.
		</ContentP>

		<ContentP>
			I have only scratched the surface of React, but I just can’t deny
			this feeling. The developer experience is A+ so far. I‘m back in the
			game!
		</ContentP>
	</div>
);

export default Content;
