Game = {

	start : function () {
		Crafty.init(460, 600);
		Crafty.background('black');
		Crafty.scene('Loading');
	},

	placeInvaders : function () {
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < 11; j++) {
				Crafty.e('Invader').at(j * 32 + 50,i * 30 + 140)
				.invaderType(i)
				.autoMoveInvader();
			}
		}
	}

}
