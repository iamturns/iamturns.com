// @flow

import stripIndent from '../vendor/strip-indent';

export const SITE_URL = 'https://iamturns.com/';

export const GTM_ID = 'GTM-PG68LQN';

export const GTM_LIVE = stripIndent(`
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=49mrtdZ_I77AARGA7Pj39A&gtm_preview=env-2&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-PG68LQN');
`);

export const GTM_DEVELOP = stripIndent(`
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=lqQBo_wSyCaf9JaVZSnnSQ&gtm_preview=env-9&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-PG68LQN');
`);

export const LOG_ROCKET_LIVE = 'gbbnsg/i-am-turns';

export const LOG_ROCKET_DEVELOP = 'gbbnsg/i-am-live-develop';
