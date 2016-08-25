'use strict';

const _ = require('lodash');
const total = require('./package.json').loop;

// 9 mi
const nums = _.range(total);

console.time('map');
nums.map(num => num + 1);
console.timeEnd('map');
