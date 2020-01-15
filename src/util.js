export function add(a = 0, b = 0) {
	return a + b;
}

export function swap(a) {
	if (a.length !== 2) {
		return a;
	} else {
		return a.unshift(a.pop());
	}
}
