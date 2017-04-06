$( document ).ready(function(){
	var cellSize = 13,
		pacmanImg = $("#pacman-character-img")[0],
		ghostImg = $("#ghost-character-img")[0],
		mapImg = $("#map-img")[0],
		canvas = new Canvas("game"),
		pacmanCharacter = new Character( new Position(13,21), pacmanImg, 0, 4, cellSize, 1 ),
		ghostCollection = new GhostCollection(ghostImg, cellSize),
		pacmanGame = new PacmanGame( canvas, DEFAULT_MAP, cellSize, mapImg, "bcdefghijpsx", pacmanCharacter, ghostCollection );
	
	//!!!EVENTS HANDLER!!!
	$("body").keydown(function(e){ 
		pacmanGame.keyEvent( e.keyCode );
	});	
});