'use strict';

const _ = require('lodash');
const total = require('./package.json').loop;

// 9 mi
const nums = _.range(total);
const r = [];

console.time('for');
for (let i = 0; i < nums.length; i++) {
	r.push(nums[i] + 1);
}
console.timeEnd('for');
