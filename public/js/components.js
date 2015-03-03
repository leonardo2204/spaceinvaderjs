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
		this.requires('2D, DOM, Twoway, Collision, Keyboard, ship')
		.attr({
			x : 30,
			y : 490
		})
		.twoway(5)
		.onHit('Wall', function () {
			this.x *= 2;
		})
	},
});

Crafty.c('Bullet', {
	init : function(){
		this.requires('2D, Canvas, Solid, Color, Collision')
		.attr({
			w : 2,
			h : 5
		})
		.color('white')
		.onHit('Invader', this.invaderHit);
	},
	
	moveBullet : function(){
		this.y -= 5;
	},
	
	at : function (x, y) {
		this.attr({
			x : x,
			y : y
		})
		
		return this;
	},
	
	invaderHit : function(invader){
		this.destroy();
		invader[0].obj.destroy();
	},	
});

Crafty.c('Invader', {
	init : function () {
		this.requires('2D, DOM, Solid, alien_1');
	},
	at : function (x, y) {
		this.attr({
			x : x,
			y : y
		})
	},
	
	invaderType : function(i){
		
	}
	
});
