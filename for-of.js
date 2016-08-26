'use strict';

const _ = require('lodash');
const total = require('./package.json').loop;

const nums = _.range(total);
let r;

console.time('for..of');
for (const num of nums) {
	r = num;
}
console.timeEnd('for..of', r);
