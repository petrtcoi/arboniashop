// Formats an integer with a non-breaking-space thousands separator (Russian
// style, e.g. 11906 -> "11 906"). Deterministic and locale-independent on
// purpose: Number.prototype.toLocaleString() picks different default locales on
// Node (server) vs the browser (client), which breaks React hydration with a
// "Text content does not match" error. This helper always produces the same
// output in both environments.
const NBSP = String.fromCharCode(0x00a0)

const formatPrice = (value: number): string =>
	Math.round(value)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, NBSP)

export default formatPrice
