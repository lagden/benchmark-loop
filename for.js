'use strict';

const _ = require('lodash');
const total = require('./package.json').loop;

const nums = _.range(total);
let r;

console.time('for');
for (let i = 0; i < nums.length; i++) {
	r = nums[i];
}
console.timeEnd('for', r);
