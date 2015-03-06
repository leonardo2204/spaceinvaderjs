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

Crafty.c('InvadersRect',{
	
	direction : 'e',
	downMovement : 0,
	
	init : function(){
		this.requires('2D, Entity, Collision')
		.bind('changeDirection', function (data) {
			this.direction = data;
		})
		.onHit('Wall', function () {
			if (this.direction === 'e') {
				Crafty.trigger('changeDirection', 'w');
			} else if (this.direction === 'w') {
				Crafty.trigger('changeDirection', 'e');
			} else {
				Crafty.trigger('changeDirection', 's');
			}
		})
		.bind('EnterFrame', function () {
			this.move(this.direction, 1);
			if(this.direction === 's')
				downMovement++;
		});
	}
})

Crafty.c('Wall', {
	init : function () {
		this.requires('Canvas, Solid, Entity')
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
		.onHit('Invader', this.invaderHit)
		.bind('EnterFrame', function () {
			if (this.y - this.h < 0) {
				Game.game_stuff.canShoot = true;
				this.destroy();
			}
		})
	},

	invaderHit : function (invader) {
		this.destroy();
		invader[0].obj.destroy();
		Game.game_stuff.score_1 += 100;
		Crafty.trigger('updateScore', {
			score : Game.game_stuff.score_1
		});
		Game.game_stuff.canShoot = true;
		Game.calculateHitbox();
	},
});

Crafty.c('RedShip', {
	init : function () {
		this.requires('Entity, DOM, Solid, redShip');
	},
});

Crafty.c('Invader', {
	direction : 'e',
	init : function () {
		this.requires('Entity, DOM, Solid, Delay, Collision')
	},

	invaderType : function (i) {
		var aliens = ['alien_1', 'alien_2', 'alien_3', 'alien_4', 'alien_5', 'alien_6'];
		this.addComponent(aliens[i]);

		return this;
	},

});
