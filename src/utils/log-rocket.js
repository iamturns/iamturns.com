// @flow

import LogRocket from 'logrocket';

import { LOG_ROCKET_LIVE } from '../config';
import { isEnvLive } from '../utils/env';
import { isUserAdmin } from '../utils/user';

// Delay prevents bots from wasting a session
const DELAY = 5000;

export function initLogRocket() {
	if (!shouldInit()) {
		return;
	}
	setTimeout(() => doInit(), DELAY);
}

function shouldInit(): boolean {
	return isEnvLive() && !isUserAdmin();
}

function doInit() {
	LogRocket.init(LOG_ROCKET_LIVE);
}
