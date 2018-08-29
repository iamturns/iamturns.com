module.exports = {
	extends: ["stylelint-config-standard", "./node_modules/prettier-stylelint/config.js"],
	rules: {
		indentation: "tab",
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: ["tailwind", "screen", "responsive", "define-mixin", "mixin"],
			},
		],
	},
};
