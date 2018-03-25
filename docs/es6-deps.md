# ES6 Deps

Gatsby does not support node_modules written in ES6.

The babel loader does not go into node_modules directory. UglifyJS then receives the ES6 code and fails, as it doesn't support ES6.

## Attempts

### Modify Gatsby babel config

Attempted to turn off Uglify and use Babel Minify instead. However this part of the config is not exposed in API hooks.

### Modify Gatsby webpack config

Attempted to modify JS loader so it would include SOME modules.

It almost worked, but requires passing in the entire babel config into the loader. This babel config is generated at a much higher level, and is impossible to regenerate at the point of the API hook.

It is also not possible to modify the existing loader `exclude` option.

### Copy modules to ./vendor/ and then compile them

It's hard to predict if the module will land in `node_modules` or in a deeper directory, if it's also a depdendy of other modules

## Solution

Manually compiling and placing in `/vendor/`

This will be fixed in Gatsby v2 so hopefully is not an issue for long.

## Affected

*   /vendor/strip-indents
