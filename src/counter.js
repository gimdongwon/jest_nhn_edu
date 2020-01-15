export function createCounter(options = {}) {
	let value = options.initVal || 0;
	return {
		val() {
			return value;
		},
		inc() {
			return value++;
		},
		dec() {
			return value--;
		},
		isMax() {
			return false;
		},
		isMin() {
			return options === value;
		}
	};
}
