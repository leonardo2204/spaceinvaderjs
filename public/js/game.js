Game = {
	
	start:function(){
		Crafty.init(500,350, document.getElementById('game'));
		Crafty.e('Player');
		Crafty.e('Wall').at(10,10);
	}
	
}