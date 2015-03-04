Game = {

	invadersArray : new Array(11 * 5),

	directionEnum : Object.freeze({
		RIGHT : 0,
		LEFT : 1,
		DOWN : 2
	}),

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

	autoMoveInvaders : function (direction) {
		if (direction == this.directionEnum.RIGHT) {
			this.invadersArray.forEach(function (invader) {
				invader.delay(function () {
					invader.x += 2;
				}, 100, 30, function () {
					Game.autoMoveInvaders(Game.directionEnum.DOWN);
				});
			});
		} else if (direction == this.directionEnum.LEFT) {
			this.delay(function () {
				this.x -= 2;
			}, 100, -1);
		} else if (direction == this.directionEnum.DOWN) {
			this.invadersArray.forEach(function (invader) {
				invader.delay(function () {
					invader.y += 2;
				}, 100, 1)
			});
		}
	},

}
