function Game( domId ){
	const 	cellSize = 13,
			pacmanImg = $("#pacman-character-img")[0],
			ghostImg = $("#ghost-character-img")[0],
			mapImg = $("#map-img")[0],
			validCellValues = "bcdefghijpsx",
			cellsInitialPoint = new Position(0, 48);
		
	var paused = false,
		ghosBuster = false,
		direction = 38,
		loopIndex = 0,
		gameLoopIntervalTime = 60,
		newFoodPosition = function(){};
		
	var canvas 	= new Canvas( domId ),
		mapGame = new MapGame( DEFAULT_MAP, canvas, mapImg, cellSize, validCellValues, cellsInitialPoint, newFoodPosition ),
		markers = new Markers( canvas, pacmanImg, cellSize, mapGame.getPointsCounter ),
		pacman 	= new PacmanCharacter( new Position(13,21), pacmanImg, 0, 4, cellSize, 1, canvas, cellsInitialPoint, mapGame );
	
	mapGame.setNewFoodPositionCallback( markers.newFoodPosition );
	
	//LOOP	
	function loop(){
		if( !paused ){
			if(loopIndex%1 == 0) 	loopCallback1();
			if(loopIndex%5 == 0) 	loopCallback5();
			if(loopIndex%10 == 0)	loopCallback10();
			loopIndex++;
		}
	};
	function loopCallback1(){
		pacman.newFrame();
	};
	function loopCallback5(){
		pacman.newStep( direction );
	};
	function loopCallback10(){
		//CODE HERE ->..<-
	};
		
	//USER INTERACTIONS
	function keyDownEvent(e){	
		e.keyCode === 32 ? pausedKeyAction() : e.keyCode>=37 && e.keyCode<=40 ? directionKeyAction(e.keyCode) : defaultKeyAction(e.keyCode);
	};
	function pausedKeyAction(){		
		paused = !paused;
		paused ? markers.paintPause() : markers.clearPause();
	};
	function defaultKeyAction(){		
		console.log("defaultKey");
	};
	function directionKeyAction( keyCode ){
		direction = keyCode;
	};
	
	function init(){
		$("body").keydown( keyDownEvent );
		setInterval( loop, gameLoopIntervalTime );
	};
	
	init();
};