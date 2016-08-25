'use strict';

const _ = require('lodash');
const total = require('./package.json').loop;

// 9 mi
const nums = _.range(total);
const r = [];

console.time('for..of');
for (const num of nums) {
	r.push(num + 1);
}
console.timeEnd('for..of');
