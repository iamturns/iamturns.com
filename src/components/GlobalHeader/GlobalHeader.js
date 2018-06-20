// @flow

import * as React from 'react';

import ImgLogo from '../../assets/images/i-am-turns-logo-300.png';
import Link from '../Link';
import PageContainer from '../PageContainer';

const GlobalHeader = () => (
	<PageContainer
		className={[
			'flex items-center',
			'h-12',
			// 'fixed pin-t pin-x z-50',
			'bg-turtle',
			'leading-0',
		].join(' ')}
	>
		<div className="flex items-center">
			<Link to="/" className="group relative">
				<img src={ImgLogo} alt="I Am Turns" width="150" height="19" />
				<div
					className={[
						'opacity-0 group-hover:opacity-100 transition',
						'mt-1',
						'bg-denim',
						'absolute pin-x',
						'pointer-events-none',
					].join(' ')}
					style={{ height: '2px' }}
				/>
			</Link>
		</div>
	</PageContainer>
);

export default GlobalHeader;
