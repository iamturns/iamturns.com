// @flow

import Cookies from "js-cookie";

export function markUserAdmin() {
	Cookies.set("admin", "1", { expires: 365 });
}

export function isUserAdmin() {
	return Cookies.get("admin") === "1";
}
