Game = {

	invadersArray : new Array(11 * 5),

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

	placeInvaders : function () {
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < 11; j++) {
				var invader = Crafty.e('Invader').at(j * 32 + 50, i * 30 + 140)
					.invaderType(i);
				this.invadersArray.push(invader);
			}
		}
	},

}
