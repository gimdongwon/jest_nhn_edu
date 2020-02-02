import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { waitForDomChange, wait, getByText, fireEvent, getByTestId } from '@testing-library/dom';
import { createServerCounter } from '../src/serverCounter/counter';

const mockAxios = new MockAdapter(axios);

let container;

beforeEach(async () => {
	container = document.createElement('div');
	document.body.appendChild(container);
	mockAxios.onGet('/counter').reply(200, { value: 10, isMin: false, isMax: false });
	createServerCounter(container);
	await waitForDomChange({ container });
});

afterEach(() => {
	document.body.innerHTML = '';
	mockAxios.reset();
});

it('생성시 버튼과 초기값을 렌더링한다.', async () => {
	expect(getByTestId(container, 'btn-inc')).toBeVisible();
	expect(getByTestId(container, 'btn-dec')).toBeVisible();
	expect(getByTestId(container, 'value').textContent).toBe('10');
});

it('+ 버튼 클릭시 서버에 inc요청을 보낸 후 응답값으로 뷰를 갱신한다.', async () => {
	mockAxios.onPut('/counter/inc').reply(200, {
		value: 11,
		isMin: false,
		isMax: false
	});
	fireEvent.click(getByTestId(container, 'btn-inc'));

	await wait(() => {
		expect(getByTestId(container, 'value').textContent).toBe('11');
	});
});

it('- 버튼 클릭시 서버에 dec 요청을 보낸 후 응답값으로 뷰를 갱신한다.', async () => {
	mockAxios.onPut('/counter/dec').reply(200, {
		value: 9,
		isMin: false,
		isMax: false
	});
	fireEvent.click(getByTestId(container, 'btn-dec'));

	await wait(() => {
		expect(getByTestId(container, 'value').textContent).toBe('9');
	});
});

it('최대값이면 + 버튼이 disabled 상태가 되고, 클릭해도 서버에 요청을 보내지 않는다', async () => {});

it('최소값이면 - 버튼이 disabled 상태가 되고, 클릭해도 서버에 요청을 보내지 않는다', async () => {});
