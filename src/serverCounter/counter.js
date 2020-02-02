import $ from 'jquery';
import axios from 'axios';
import { createCounter } from '../backup/counter';

export function createServerCounter(el, options) {
	const $el = $(el);
	const counter = createCounter(options);

	function render({ value, isMax, isMin }) {
		const decDisabled = isMin ? 'disabled' : '';
		const incDisabled = isMax ? 'disabled' : '';

		$el.html(`
      <button data-testid="btn-dec" type="button" ${decDisabled} class="btn btn-secondary btn-dec">-</button>
      <span data-testid="value" class="value">${value}</span>
      <button data-testid="btn-inc" type="button" ${incDisabled} class="btn btn-primary btn-inc">+</button>
    `);
	}

	axios.get('/counter').then(({ data }) => {
		render(data);
	});

	$el.on('click', '.btn-inc', () => {
		axios.put('/counter/inc').then(({ data }) => {
			render(data);
		});
	});

	$el.on('click', '.btn-dec', () => {
		axios.put('/counter/dec').then(({ data }) => {
			render(data);
		});
	});
}
