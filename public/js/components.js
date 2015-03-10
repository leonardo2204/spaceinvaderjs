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
		this.requires('Canvas, Solid, Entity, Collision')
		.attr({
			w : 1,
			h : 500
		})
		.checkHits('Invader')
		.bind('HitOn', function () {
			if (Game.game_stuff.direction === 'e') {
				Crafty.trigger('changeDirection', 'w');
			} else if (Game.game_stuff.direction === 'w') {
				Crafty.trigger('changeDirection', 'e');
			}
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
			if (this.y - this.h < 80) {
				Game.game_stuff.canShoot = true;
				this.destroy();
			}
		})
	},

	invaderHit : function (invader) {
		this.destroy();
		invader[0].obj.destroy();
		Game.game_stuff.score_1 += invader[0].obj.getScore();;
		Crafty.trigger('updateScore', {
			score : Game.game_stuff.score_1
		});
		Game.game_stuff.canShoot = true;
	},
});

Crafty.c('RedShip', {
	init : function () {
		this.requires('Entity, DOM, Solid, redShip');
	},
});

Crafty.c('Bunker', {
	bunkers : ['bunker_1', 'bunker_2','bunker_3', 'bunker_4'],
	init : function (){
		this.requires('Entity, DOM, Solid, bunker_4')
		
	},
	
	invaderType : function (i) {
		this.addComponent(this.bunkers[i])
		return this;
	}
	
});

Crafty.c('Invader', {
	aliens : ['alien_1', 'alien_2','alien_2', 'alien_3', 'alien_3'],
	score : 0,
	init : function () {
		this.requires('Entity, DOM, Solid, Delay, SpriteAnimation')
		.bind('EnterFrame', function () {
			this.move(Game.game_stuff.direction, 1);
		}).bind('changeDirection',function(data){
			Game.game_stuff.direction = data;
			this.move('s',15);
		})
	},

	invaderType : function (i) {
		this.addComponent(this.aliens[i])
		.reel('InvaderMovement',1000,0,0,2)
		.animate('InvaderMovement',-1);
		this.setScore(i);
		return this;
	},
	
	setScore : function(i){
		this.score = Game.invaders_score[this.aliens[i]];
	},
	
	getScore : function(){
		return this.score;
	}

});
