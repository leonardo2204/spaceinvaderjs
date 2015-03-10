Crafty.scene('Game', function () {
	Crafty.e('Player')
	.bind('KeyDown', function () {
		if (this.isDown('SPACE') && Game.game_stuff.canShoot) {
			Game.game_stuff.canShoot = false;
			Crafty.e('PlayerBullet').at(this.x + this.w / 2 - 2, this.y - 8)
			.bind('EnterFrame', function () {
				this.move('n', 5);
			});
		}
	}),

	Crafty.e('Wall').at(0, 10);
	Crafty.e('Wall').at(Game.width(), 10);
	Crafty.e('Alien');
	
	Crafty.e('Bunker').at(40,410);
	Crafty.e('Bunker').at(150,410);
	Crafty.e('Bunker').at(260,410);
	Crafty.e('Bunker').at(370,410);
	
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
		x : 60,
		y : 65
	}).text("0000")
	.textColor('white')
	.textFont({
		size : '16px'
	}).bind('updateScore', function (data) {
		this.text(data.score);
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
});

Crafty.scene('Loading', function () {
	Crafty.e('2D, Canvas, Text')
	.text('Loading, please wait...')
	.textColor('white')
	.attr({
		x : Game.width() / 2 - 55,
		y : Game.height() / 2 - 24
	});

	Crafty.load({
		sprite : ["images/invader_1_sprite.png","images/invader_2_sprite.png","images/invader_3_sprite.png", "images/ship.png", "images/shoot.png", "images/redShip.png","images/bunkers_transparent.png"]
	}, function () {
		Crafty.sprite(24, 16, 'images/invader_1_sprite.png', {
			alien_1 : [0, 0]
		});
		
		Crafty.sprite(24, 16, 'images/invader_2_sprite.png', {
			alien_2 : [0, 0]
		});
		
		Crafty.sprite(24, 16, 'images/invader_3_sprite.png', {
			alien_3 : [0, 0]
		});

		Crafty.sprite(30, 16, "images/ship.png", {
			ship : [0, 0]
		});

		Crafty.sprite(16, 16, "images/shoot.png", {
			shoot : [0, 0]
		});

		Crafty.sprite(52, 26, "images/redShip.png", {
			redShip : [0, 0]
		});
		
		Crafty.sprite(55, 48, "images/bunkers_transparent.png", {
			bunker_1 : [0, 0],
			bunker_2 : [1, 0],
			bunker_3 : [2, 0],
			bunker_4 : [3, 0]
		});

		Crafty.scene('Game');
		
	});

})
