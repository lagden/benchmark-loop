'use strict';

const _ = require('lodash');
const total = require('./package.json').loop;

// 9 mi
const nums = _.range(total);
const r = [];

console.time('forEach');
nums.forEach(num => {
	r.push(num + 1);
});
console.timeEnd('forEach');
