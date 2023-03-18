/**
 * ScrollTo
 * [version 1.1]
 */

(function () {
	var $scrollable;
	var getScrollable = function () {
		if ($scrollable) {
			return $scrollable;
		}

		var elements = ['body', 'html'];

		for (var i = elements.length - 1; i >= 0; i--) {
			var $scrollElement = $(elements[i]);

			if ($scrollElement.scrollTop() > 0) {
				return $scrollable = $scrollElement;
			} else {
				$scrollElement.scrollTop(1);
				var isScrollable = $scrollElement.scrollTop() > 0;

				$scrollElement.scrollTop(0);

				if (isScrollable) {
					return $scrollable = $scrollElement;
				}
			}
		};
	}

	$.scrollTo = function (top, options) {
		var $scrollable = getScrollable();

		if ($scrollable) {
			if (options === undefined) {
				$scrollable.scrollTop(top);
			} else {
				$scrollable.animate({
					scrollTop: top
				}, options);
			}
		}
	}
})();
