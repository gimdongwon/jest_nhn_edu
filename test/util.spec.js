import { add, swap } from '../src/util';

describe('add()', () => {
	test('인자가 없으면 0을 반환한다.', () => {
		expect(add()).toBe(0);
	});

	test('인자가 하나이면, 인자 그대로 반환한다.', () => {
		expect(add(5)).toBe(5);
	});

	test('인자가 두 개이면 두 인자를 더한 결과를 반환한다', () => {
		expect(add(3, 5)).toBe(8);
	});
});

describe('swap()', () => {
	test('배열의 인자가 두 개가 아닌 경우, 기존 배열을 그대로 반환한다.', () => {
		const arr1 = [ 1 ],
			arr2 = [ 2, 4, 5 ];

		expect(swap(arr2)).toEqual(arr2);
		expect(swap(arr1)).toEqual(arr1);
	});

	// test('배열 내의 두 요소의 순서를 바꾸어 새로운 배열을 반환한다.', () => {
	// 	expect(swap([ 3, 4 ])).toEqual([ 4, 3 ]);
	// });

	test('변경된 배열은 기존 배열과 다른 새로운 배열이다.', () => {
		const arr = [ 1, 2 ];
		expect(swap(arr)).not.toBe(arr);
	});
});
