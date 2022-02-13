module.exports = {
	/**
	 * @description Include parentheses around a sole arrow function parameter.
	 * @default "always"
	 * @type {('always' | 'avoid')}
	 *    - always: Always include parens. Example: `(x) => x`
	 *    - avoid: Omit parens when possible. Example: `x => x`
	 */
	arrowParens: 'always',
	/**
	 * @description Put > of opening tags on the last line instead of on a new line.
	 * @default false
	 * @type {boolean}
	 */
	bracketSameLine: false,
	/**
	 * @description Print spaces between brackets.
	 * @default true
	 * @type {boolean}
	 */
	bracketSpacing: true,
	/**
	 * @description Specify the input filepath. This will be used to do parser inference.
	 * @type {string}
	 */
	// filepath: '',
	/**
	 * @description How to handle whitespaces in HTML.
	 * @default 'css'
	 * @type {'css' | 'strict' | 'ignore'}
	 * @argument
	 *    - css: Respect the default value of CSS display property.
	 *    - strict: Whitespaces are considered sensitive.
	 *    - ignore: Whitespaces are considered insensitive.
	 */
	htmlWhitespaceSensitivity: 'css',
	/**
	 * @description Which parser to use.
	 * @default ''
	 * @type {
	 *    "flow" | "babel" | "espree" | "meriyah" | "graphql" |
	 *    "markdown" | "mdx" | "vue" | "yaml" | "glimmer" |
	 *    "html" | "angular" | "lwc" | "css" | "less" |
	 *    "scss" | "json" | "json5" | "typescript" | "babel-flow" | "babel-ts" | "json-stringify"
	 *    string
	 * }
	 */
	// parser: "",
	/**
	 * @description The line length where Prettier will try wrap.
	 * @default 80
	 * @type {number}
	 */
	printWidth: 80,
	/**
	 * @description How to wrap prose.
	 * @default "preserve"
	 * @type {('always' | 'never' | 'preserve')}
	 *    - always Wrap prose if it exceeds the print width.
	 *    - never Do not wrap prose.
	 *    - preserve Wrap prose as-is.
	 */
	proseWrap: 'preserve',
	/**
	 * @description Change when properties in objects are quoted.
	 * @default "as-needed"
	 * @type {('as-needed' | 'consistent' | 'preserve' )}
	 *    - as-needed: Only add quotes around object properties where required.
	 *    - consistent: If at least one property in an object requires quotes, quote all properties.
	 *    - preserve: Respect the input use of quotes in object properties.
	 */
	quoteProps: 'as-needed',
	/**
	 * @description Print semicolons.
	 * @default true
	 * @type {boolean}
	 */
	semi: false,
	/**
	 * @description Use single quotes instead of double quotes.
	 * @default false
	 * @type {boolean}
	 */
	singleQuote: true,
	/**
	 * @description Number of spaces per indentation level.
	 * @default 2
	 * @type {number}
	 */
	tabWidth: 4,
	/**
	 * @description Print trailing commas wherever possible when multi-line.
	 * @default 'es5'
	 * @type {('es5' | 'none' | 'all')}
	 *    - es5: Trailing commas where valid in ES5 (objects, arrays, etc.)
	 *    - none: description": "No trailing commas.
	 *    - all: Trailing commas wherever possible (including function arguments).
	 */
	trailingComma: 'all',
	/**
	 * @description Indent with tabs instead of spaces.
	 * @default false
	 * @type {boolean}
	 */
	useTabs: true,
}
