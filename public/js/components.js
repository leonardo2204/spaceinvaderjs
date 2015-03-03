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
	init : function () {
		this.requires('2D, Canvas, Solid, Collision, shoot')
		.onHit('Player', this.playerHit);
	},

	moveBullet : function () {
		this.y += 5;
	},

	at : function (x, y) {
		this.attr({
			x : x,
			y : y
		})

		return this;
	},

	playerHit : function (player) {
		this.destroy();
		player[0].obj.destroy();
	},
});

Crafty.c('PlayerBullet', {
	init : function () {
		this.requires('2D, Canvas, Solid, Color, Collision')
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

	at : function (x, y) {
		this.attr({
			x : x,
			y : y
		})
		return this;
	},

	invaderHit : function (invader) {
		this.destroy();
		invader[0].obj.destroy();
	},
});

Crafty.c('RedShip', {
	init : function () {
		this.requires('2D, DOM, Solid, redShip');
	},
	at : function (x, y) {
		this.attr({
			x : x,
			y : y
		})
	},
});

Crafty.c('Invader', {
	init : function () {
		this.requires('2D, DOM, Solid, Delay');
	},
	at : function (x, y) {
		this.attr({
			x : x,
			y : y
		})

		return this;
	},

	invaderType : function (i) {
		var aliens = ['alien_1', 'alien_2', 'alien_3', 'alien_4', 'alien_5', 'alien_6'];
		this.addComponent(aliens[i]);

		return this;
	},

	autoMoveInvader : function () {
		this.delay(function () {
			this.x += 2;
		}, 1700, -1);
	},

});
