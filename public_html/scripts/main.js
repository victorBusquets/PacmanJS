/* ------------ TRES REGIONES ------------ *\ 

	1 - Marcadores(x,y)	->   0,  0 - 480, 48

	2 - Juego(x,y)		->   0, 48 - 480,576

	3 - Vidas(x,y)	 	->   0,576 - 480,608

\* -------------------------------------- */

var game, 
	values = "bcdefghijps",
	spriteImg = new Image();
	
spriteImg.src = "styles/assets/cell-sprite.png";

$( document ).ready(function(){
	gameCanvas = new Canvas("game");
	gameCanvas.fillFullRect("black");
	
	//PAINTING CELLS	
	
	//EL TAMAÑO DEL CANVAS DEBE CALCULARSE CON DEFAULT_MAP.size
	
	var cellsInitialPoint = {x:0, y:48},
		cellSize = 16,
		rowSize = DEFAULT_MAP.size.x;
		
	//TROZEAMOS EL MAPA
	DEFAULT_MAP.value = DEFAULT_MAP.value.match(/.{1,2}/g);
	
	for(var y=0; y<DEFAULT_MAP.size.y; y++){
		for(var x=0; x<DEFAULT_MAP.size.x; x++){
			
			var cellValue = DEFAULT_MAP.value[ y * (rowSize) + x ][0],
				rotate = DEFAULT_MAP.value[ y * (rowSize) + x ][1];

			if(cellValue!='a'){
				var spriteStartX = ( values.indexOf( cellValue ) ) * 16;//OBTENEMOS EL FRAGMENTO DE SPRITE :D
				
				gameCanvas.rotateContext( cellSize*x + cellsInitialPoint.x + cellSize/2, cellSize*y + cellsInitialPoint.y + cellSize/2, rotate*90 );
				gameCanvas.drawImage( spriteImg, spriteStartX, 0, cellSize, cellSize, -cellSize/2, -cellSize/2, cellSize, cellSize );
				gameCanvas.restoreContext();
			}
		}		
	}
	//PAINTING CELLS
	
});