function Game( domId ){
	const 	cellSize = ScreenAdapter().getCellSize(),
			spriteSize = 13,
			pacmanImg = $("#pacman-character-img")[0],
			ghostImg = $("#ghost-character-img")[0],
			mapImg = $("#map-img")[0],
			validCellValues = "bcdefghijpsx",
			cellsInitialPoint = new Position(0, 24);
		
	var paused = false,
		ghosBuster = false,
		direction = 38,
		loopIndex = 0,
		gameLoopIntervalTime = 60,
		pacmanMovementSpeed = 5;
		
	var canvas 	= new Canvas( domId, ScreenAdapter().getCanvasSizeConfiguration() ),
		mapGame = new MapGame( DEFAULT_MAP, canvas, mapImg, cellSize, validCellValues, spriteSize ),
		markers = new Markers( canvas, pacmanImg, cellSize, mapGame.getPointsCounter, spriteSize ),
		pacman 	= new PacmanCharacter( new Position(13,21), pacmanImg, 0, 4, cellSize, 1, canvas, mapGame, spriteSize );
	
	mapGame.setNewFoodPositionCallback( markers.newFoodPosition );
	
	//LOOP	
	function loop(){
		if( !paused ){
			if( loopIndex%pacmanMovementSpeed == 0 ) 	loopCallback5();
			animations();
			loopIndex++;
		}
	};
	function animations(){
		pacman.newFrame();
	};
	function loopCallback5(){
		pacman.newStep( direction );
	};
		
	//USER INTERACTIONS
	function keyDownEvent(e){	
		var keyCode = ( e.keyCode ? e.keyCode : e );
		keyCode === 32 ? pausedKeyAction() : keyCode>=37 && keyCode<=40 ? directionKeyAction(keyCode) : defaultKeyAction(keyCode);
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
	function mobileActionkClick(){
		keyDownEvent( $(this).data('keycode') );
	}
	function addControls(){
		if( ScreenAdapter().isDevice() ){
			$("body").addClass("device");
			$(".controls .action").click( mobileActionkClick );
		}else{	
			$("body").keydown( keyDownEvent );
		}
	};
	function init(){
		addControls();
		setInterval( loop, gameLoopIntervalTime );
	};
	
	init();
};