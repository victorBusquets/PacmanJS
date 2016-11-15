var game;

$( document ).ready(function(){
	gameCanvas = new Canvas("game");
	gameCanvas.fillFullRect("black");
	gameCanvas.fillRect( 0, 48, 480, 576-48, "red"); 	// <- Game area
});


/* ------------ TRES REGIONES ------------ *\ 

	1 - Marcadores(x,y)	->   0,  0 - 480, 48

	2 - Juego(x,y)		->   0, 48 - 480,576

	3 - Vidas(x,y)	 	->   0,576 - 480,608

\* -------------------------------------- */