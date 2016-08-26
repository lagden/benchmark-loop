'use strict';

const _ = require('lodash');
const total = require('./package.json').loop;

const nums = _.range(total);
let r;

console.time('forEach');
nums.forEach(num => {
	r = num;
});
console.timeEnd('forEach', r);
