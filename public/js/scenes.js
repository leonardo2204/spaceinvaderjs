Crafty.scene('Game', function () {

	Crafty.e('Player')
	.bind('KeyDown', function () {
		if (this.isDown('SPACE'))
			Crafty.e('PlayerBullet').at(this.x + this.w / 2 - 2, this.y - 8)
			.bind('EnterFrame', function () {
				this.moveBullet();
			});
	})

	Crafty.e('Wall').at(10, 10);
	Crafty.e('Alien');
	//Crafty.e('RedShip').at(30,100);

	Crafty.e('2D, Canvas, Text').attr({
		x : 30,
		y : 35
	}).text("SCORE < 1 >")
	.textColor('white')
	.textFont({
		size : '16px'
	});

	Crafty.e('2D, Canvas, Text').attr({
		x : 180,
		y : 35
	}).text("HI-SCORE")
	.textColor('white')
	.textFont({
		size : '16px'
	});

	Crafty.e('2D, Canvas, Text').attr({
		x : 330,
		y : 35
	}).text("SCORE < 2 >")
	.textColor('white')
	.textFont({
		size : '16px'
	});

	Game.placeInvaders();
	Game.autoMoveInvaders(Game.directionEnum.RIGHT);
});

Crafty.scene('Loading', function () {
	Crafty.e('2D, DOM, Text')
	.text('Loading; please wait...')
	.attr({
		x : 0,
		y : 320 / 2 - 24,
		w : 500
	});

	Crafty.load({
		sprite : ["images/invaders.png", "images/ship.png","images/shoot.png","images/redShip.png"]
	}, function () {
		Crafty.sprite(24, 16, 'images/invaders.png', {
			alien_1 : [0, 0],
			alien_2 : [1, 0],
			alien_3 : [2, 0],
			alien_4 : [3, 0],
			alien_5 : [3, 0],
			alien_6 : [3, 0]
		}, 5);

		Crafty.sprite(30, 16, "images/ship.png", {
			ship : [0, 0]
		});
		
		Crafty.sprite(16, 16, "images/shoot.png", {
			shoot : [0, 0]
		});
		
		Crafty.sprite(52, 26, "images/redShip.png", {
			redShip : [0, 0]
		});
		
	});

	Crafty.scene('Game');

})
