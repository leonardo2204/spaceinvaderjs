Crafty.c('Wall', {
	init : function () {
		this.requires('2D,Canvas, Solid, Color')
		.color('#F00')
		.attr({
			w : 2,
			h : 500
		})
	},
	at : function (x, y) {
		this.attr({
			x : x,
			y : y
		})
	},
});

Crafty.c('Player', {
	init : function () {
		this.requires('2D, Canvas, Color, Twoway, Collision')
		.attr({
			x : 30,
			y : 300,
			w : 50,
			h : 50
		})
		.color('#F00')
		.twoway(5)
		.onHit('Wall', function () {
			this.x += 5;
		})
	},
})
