$( document ).ready(function(){
	var pacmanCharacter = new Character( {x:15,y:25}, "styles/assets/pacman-sprite.png", 0, 1, 20, 0 );
		mapGame = new MapGame( "game", DEFAULT_MAP, 16, "styles/assets/cell-sprite.png", "bcdefghijps", pacmanCharacter );	
});