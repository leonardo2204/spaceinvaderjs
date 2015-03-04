Crafty.c('Entity', {
	init : function () {
		this.requires('2D')
	},
	at : function (x, y) {
		this.attr({
			x : x,
			y : y
		})
		
		return this;
	},
})

Crafty.c('Wall', {
	init : function () {
		this.requires('Canvas, Solid, Color, Entity')
		.color('#F00')
		.attr({
			w : 1,
			h : 500
		})
	},
});

Crafty.c('Player', {
	init : function () {
		this.requires('Entity, DOM, Twoway, Collision, Keyboard, ship')
		.attr({
			x : 30,
			y : 490
		})
		.twoway(5)
		.onHit('Wall', function (from) {
			this.attr({
				x : from[0].obj.x
			});
		})
	},
});

Crafty.c('Bullet', {
	init : function () {
		this.requires('Entity, Canvas, Solid, Collision, shoot')
		.onHit('Player', this.playerHit);
	},

	moveBullet : function () {
		this.y += 5;
	},

	playerHit : function (player) {
		this.destroy();
		player[0].obj.destroy();
	},
});

Crafty.c('PlayerBullet', {
	init : function () {
		this.requires('Entity, Canvas, Solid, Color, Collision')
		.attr({
			w : 2,
			h : 5
		})
		.color('white')
		.onHit('Invader', this.invaderHit);
	},

	moveBullet : function () {
		this.y -= 5;
	},

	invaderHit : function (invader) {
		this.destroy();
		invader[0].obj.destroy();
	},
});

Crafty.c('RedShip', {
	init : function () {
		this.requires('Entity, DOM, Solid, redShip');
	},
});

Crafty.c('Invader', {
	init : function () {
		this.requires('Entity, DOM, Solid, Delay');
	},

	invaderType : function (i) {
		var aliens = ['alien_1', 'alien_2', 'alien_3', 'alien_4', 'alien_5', 'alien_6'];
		this.addComponent(aliens[i]);

		return this;
	},

});
