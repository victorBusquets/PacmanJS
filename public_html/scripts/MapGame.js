var MapGame = function( canvasId, map, cellSize, cellImg, cellValues, pacmanCharacter ){
	var cellSprite = new Image(),
		cellsInitialPoint = {x:0, y:48}, //ESTO DEBERIA SER CALCULADO EN FUNCION DEL MAP SIZE!!!!
		gameCanvas = new Canvas( canvasId ),
		rowSize = map.size.x;
	
	var paintFullMap = function(){
		//ESTAS LINEAS DEBEN SER LIMPIADAS PARA ASI PODER USARLAS PARA PINTAR UNA CELDA UNICA
		for(var y=0; y<DEFAULT_MAP.size.y; y++){
			for(var x=0; x<DEFAULT_MAP.size.x; x++){
				var cellValue = DEFAULT_MAP.value[ y * (rowSize) + x ][0],
				rotate = DEFAULT_MAP.value[ y * (rowSize) + x ][1];

				if(cellValue!='a' && cellValue!='t'){
				var spriteStartX = ( cellValues.indexOf( cellValue ) ) * 16;

				gameCanvas.rotateContext( cellSize*x + cellsInitialPoint.x + cellSize/2, cellSize*y + cellsInitialPoint.y + cellSize/2, rotate*90 );
				gameCanvas.drawImage( cellSprite, spriteStartX, 0, cellSize, cellSize, -cellSize/2, -cellSize/2, cellSize, cellSize );
				gameCanvas.restoreContext();
				}
			}		
		}
	},
	
	loadSprite = function( spriteUrl ){
		cellSprite.src = spriteUrl;
	},
	
	paintBlackFullRect = function(){
		gameCanvas.fillFullRect("black");
	},
	
	paintPacmanCharacter = function(){
		var pacmanPosition = pacmanCharacter.getPosition();
		gameCanvas.rotateContext( cellSize*pacmanPosition.x + cellsInitialPoint.x + cellSize/2, cellSize*pacmanPosition.y + cellsInitialPoint.y + cellSize/2, pacmanCharacter.getOrientation() );
		pacmanCharacter.drawImage( gameCanvas.drawImage );
		gameCanvas.restoreContext();
	},
	
	splitMap = function(){
		map.value = map.value.match(/.{1,2}/g);
	},
	
	init = function(){
		splitMap();
		loadSprite( cellImg );
		paintBlackFullRect();
		paintFullMap();
		paintPacmanCharacter();
	};
	
	init();
	
	return {
		paintFullMap: paintFullMap
	};
};