function MapGame( mapOptions, canvas, cellSprite, cellSize, validCellValues, spriteSize ){
	const EMPTY_CELL = 'a0';
	
	var value = mapOptions.value,
		size = mapOptions.size,
		teleportPoints = mapOptions.teleportPoints,
		points = 0,
		newFoodPositionCallback,
		cellsInitialPoint = cellSize*4,
		clearExtra = cellSize/25;
		
	function setNewFoodPositionCallback( newFoodPosition ){
		newFoodPositionCallback = newFoodPosition;
	};
	function countPoints(){
		points = (value.match(/[p,s]/g) || []).length;
	};
	function splitMap(){
		var spliter = new RegExp('.{1,'+(size.x * 2)+'}', 'g');
		value = value.match( spliter );
	};
	function setCellEmpty( position ){
		var newRow = value[ position.getY() ].substr(0, position.getX()*2)  + EMPTY_CELL + value[ position.getY() ].substr(position.getX()*2+2);
		value[ position.getY() ] = newRow;
		
		clearCell(position);
	};
	function validArea( position ){
		var value = getMapValue(position) || ' ';
		return 'tspa'.indexOf(value[0])>=0;
	};
	
	//TELEPORT FUNCTIONS
	function isTeleportTransition( position, newPosition ){
		return ( isTeleportPosition( position ) && positionOverLimits( newPosition ) ? getTeleportPosition( position ) : false );
	};
	function positionOverLimits( position ){
		var x = position.getX(),
			y = position.getY();
			
		return x >= size.x || x < 0 || y >= size.y || y < 0;
	};
	function isTeleportPosition( position ){
		return getMapValue( position )[0] == 't';
	};
	function getTeleportPosition( currentPosition ){
		return teleportPoints.filter( function( teleportPoint ){
			return teleportPoint[0].equalPosition( currentPosition ) || teleportPoint[1].equalPosition( currentPosition );
		})[0].filter( function( teleportPosition ){
			return !teleportPosition.equalPosition( currentPosition );
		})[0];
	};
	
	function paintMapGame(){
		canvas.fillFullRect("black");
		paintFullMap();
	};
	function getMapValue( position ){
		return value[ position.getY() ].match(/.{1,2}/g)[ position.getX() ];
	};	
	function paintFullMap(){
		for(var y=0; y<size.y; y++){
			for(var x=0; x<size.x; x++){
				paintCell(new Position(x,y));
			}		
		}
	};
	function paintCell( position ){	
		var x = position.getX(),
			y = position.getY(),
			cellValue = getMapValue(position)[0],
			rotate = getMapValue(position)[1];
			
		if(cellValue!='a' && cellValue!='t'){
			var spriteStartX = ( validCellValues.indexOf( cellValue ) ) * spriteSize;

			canvas.rotateContext( cellSize*x + cellSize/2, cellSize*y + cellsInitialPoint + cellSize/2, rotate*90 );
			canvas.drawImage( cellSprite, spriteStartX, 0, spriteSize, spriteSize, -cellSize/2, -cellSize/2, cellSize, cellSize );
			canvas.restoreContext();
		}
	};
	function clearCell( position ){
		var x = position.getX(),
			y = position.getY();
			
		canvas.fillRect( cellSize*x, cellSize*y + cellsInitialPoint, cellSize, cellSize, 'black' );
	};
	function getPointsCounter(){
		return points;
	};
	
	function checkEatPointPosition( position ){
		var value= getMapValue( position )[0];
		
		if( isPointPosition( value ) ){
			setCellEmpty(position);
			newFoodPositionCallback( value );
		}
	};
	function isPointPosition(value){
		return 'ps'.indexOf(value) >= 0;
	};
	
	function init(){
		countPoints();
		splitMap();
		paintMapGame();
	};
	
	init();
	
	return {
		setNewFoodPositionCallback: setNewFoodPositionCallback,
		checkEatPointPosition: checkEatPointPosition,
		isTeleportTransition: isTeleportTransition,
		getPointsCounter: getPointsCounter,
		setCellEmpty: setCellEmpty,
		getMapValue: getMapValue,
		validArea: validArea,
		paintCell: paintCell,
		clearCell: clearCell
	};
};