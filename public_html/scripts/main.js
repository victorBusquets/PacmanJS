$( document ).ready(function(){
	var pacmanImg = $("#pacman-character-img")[0],
		ghostImg = $("#ghost-character-img")[0],
		mapImg = $("#map-img")[0],
		canvas = new Canvas("game"),
		pacmanCharacter = new Character( new Position(13,21), pacmanImg, 0, 4, 16, 1 ),
		ghostCollection = new GhostCollection(ghostImg),
		pacmanGame = new PacmanGame( canvas, DEFAULT_MAP, 16, mapImg, "bcdefghijpsx", pacmanCharacter, ghostCollection );
	
	//!!!EVENTS HANDLER!!!
	$("body").keydown(function(e){ 
		pacmanGame.keyEvent( e.keyCode );
	});	
});