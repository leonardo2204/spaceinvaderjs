Game = {

	game_stuff : {
		score_1 : 0,
		score_2 : 0,
		canShoot : true,
		moveDownDistance : 2
	},
	
	game_screen : {
		width : 600,
		height : 460
	},
	
	invaders_score : {
		'alien_1' : 30,
		'alien_2' : 20,
		'alien_3' : 10
	},

	width : function () {
		return this.game_screen.height;
	},

	height : function () {
		return this.game_screen.width;
	},

	start : function () {
		Crafty.init(Game.width(), Game.height());
		Crafty.background('black');
		Crafty.scene('Loading');
	},

	placeInvaders : function (e) {
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < 11; j++) {
				var invader = Crafty.e('Invader').at(j * 32 + 50, i * 30 + 140)
					.invaderType(i);
				e.attach(invader);
			}
		}
	},
	
	calculateHitbox : function(){
		var l = _.min(Crafty('InvadersRect')._children,function(invader){
			return invader.x;
		});
		
		var r = _.max(Crafty('InvadersRect')._children,function(invader){
			return invader.x;
		});
		
		var b = _.max(Crafty('InvadersRect')._children,function(invader){
			return invader.y;
		});
			
	},

}
