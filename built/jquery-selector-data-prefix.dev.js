//     jquery-selector-data-prefix
//     (c) simonfan
//     jquery-selector-data-prefix is licensed under the MIT terms.

/**
 * AMD module.
 *
 * @module jquery-selector-data-prefix
 */

define('jquery-selector-data-prefix',['require','exports','module','jquery','lodash'],function (require, exports, module) {
	

	var $ = require('jquery'),
		_ = require('lodash');

	// :data-prefix(prefix)
	// meta would carry the following info:
	// [
	//     ':data-prefix(prefix)', // full selector
	//     'data-prefix',          // only selector
	//     '"',                    // quotes used
	//     'arg1, arg2'            // parameters
	// ]
	$.expr[':']['data-prefix'] = function jqDataPrefixSelector(obj, index, meta, stack) {

		var data     = $(obj).data(),
			prefix   = meta[3],
			prefixRe = new RegExp('^' + prefix + '([A-Z$_].*$)');

		return _.some(data, function (value, key) {
			return prefixRe.test(key);
		});
	};

});

