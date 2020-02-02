export function createCounter(options = {}) {
	let value = options.initVal || 0;
	return {
		val() {
			return value;
		},
		inc() {
			return options.max === value ? value : ++value;
		},
		dec() {
			return options.min === value ? value : --value;
		},
		isMax() {
			return options.max ? true : false;
		},
		isMin() {
			return options.min === value;
		}
	};
}
