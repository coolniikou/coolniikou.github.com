;(function($) {
	$.fn.simplecd = function(options) {
		var opts = jQuery.extend({}, jQuery.fn.simplecd.defaults, options);
	
		return this.each(function() {
			for
		});
	};

	function zerofill(str) {
		var str = '00' + str;
		return str.substr(str.length-2, 2);
	};

	$.fn.simplecd.default = {
		until: '2011/10/30',
		end_message: 'Time over',
	};
})(jQuery);
