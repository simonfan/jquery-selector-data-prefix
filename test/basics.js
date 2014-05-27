(function(name, factory) {

	var mod = typeof define !== 'function' ?
		// node
		'.././src' :
		// browser
		'jquery-selector-data-prefix',
		// dependencies for the test
		deps = [mod, 'should', 'lodash'];

	if (typeof define !== 'function') {
		// node
		factory.apply(null, deps.map(require));
	} else {
		// browser
		define(deps, factory);
	}

})('test', function(selector, should, _) {
	'use strict';

	describe('selector basics', function () {
		beforeEach(function () {
			this.$fixture = $('#fixture');
		});

		it('is fine (:', function () {

			var $prefixed = this.$fixture.find(':data-prefix(prefix)');

			$prefixed.length.should.eql(3);

			_.each($prefixed, function (el) {

				$(el).html().should.eql('prefixed')

			});


			var $unprefixed = this.$fixture.find(':not(:data-prefix(prefix))');

			$unprefixed.length.should.eql(2);





		});
	});
});
