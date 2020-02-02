import $ from 'jquery';
import { createUICounter } from './counter';

createUICounter($('#counter'), {
	initVal: 0,
	min: -3,
	max: 3
});
