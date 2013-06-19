/*
	TweenDeck - For making animated presentation decks with Greensock
	by John Polacek (@johnpolacek)

	Powered by the Greensock Tweening Platform
	http://www.greensock.com
	Greensock License info at http://www.greensock.com/licensing/

	Dual licensed under MIT and GPL.
*/

(function($) {

	$.tweendeck = function(timeline, options) {

		var tweendeck = this;
		var defaults = {

		};
		tweendeck.settings = $.extend({}, defaults, options);

		function pauseTimeline() { timeline.pause(); }

		$.each(timeline.getChildren(false), function() {
			this.eventCallback('onComplete', pauseTimeline).eventCallback('onReverseComplete', pauseTimeline);
		});

		// Keyboard events
		$(document).on('keydown', function(e){
			// down/right arrow, space = play forward
			if (e.keyCode === 39 || e.keyCode === 32 || e.keyCode === 40) {
				timeline.play();
			}
			// up/left arrow = rewind
			else if (e.keyCode === 37 || e.keyCode === 38) {
				timeline.reverse();
			}
		});

		return tweendeck;
	};

})(jQuery);
