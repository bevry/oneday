'use strict'

import { equal } from 'assert-helpers'
import kava from 'kava'
import oneday from './index.js'

kava.suite('oneday', function (suite, test) {
	test('is actually one day', function () {
		const expected =
			1000 * // millisconds in a second
			60 * // seconds in a minute
			60 * // minutes in an hour
			24 // hours in a day
		equal(oneday, expected)
	})
})
