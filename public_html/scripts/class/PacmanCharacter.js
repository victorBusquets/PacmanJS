function PacmanCharacter( position, sprite, actualFrame, numberOfFrames, cellSize, orientation, canvas, mapGame, spriteSize ){
	var lastDirection = 38,
		cellsInitialPoint = cellSize*4,
		inMovement = false;
			
	function newStep( direction ){
		var newPosition = getNewPosition( position.getNewPositionWithDirection(direction) ),
			newPositionOldDirection = getNewPosition( position.getNewPositionWithDirection(lastDirection) );
		
		inMovement = false;
		mapGame.clearCell(position);
		
		if(newPosition != false){
			lastDirection = direction;
			position = newPosition;
			setOrientation( lastDirection );
			inMovement = true;
		}else if(newPositionOldDirection != false){
			direction = lastDirection;
			position = newPositionOldDirection;
			setOrientation( direction );
			inMovement = true;
		}

		mapGame.checkEatPointPosition(position);
		drawRotatedImage();
	};
	function getNewPosition( newPosition ){
		return mapGame.validArea( newPosition ) ? newPosition : mapGame.isTeleportTransition( position, newPosition )
	};
	function newFrame(){
		if(inMovement){
			actualFrame = (actualFrame + 1  >= numberOfFrames ? 0  : actualFrame + 1 );
			mapGame.clearCell(position);
			drawRotatedImage();
		}
	};
	function getOrientation(){
		return orientation * 90;
	};
	function setOrientation( direction ){
		orientation = ( direction == 37 ? 3 : direction == 38 ? 0 : direction == 39 ? 1 : direction == 40 ? 2 : orientation );
	};
	function drawRotatedImage(){		
		canvas.rotateContext( cellSize*position.getX() + cellSize/2, cellSize*position.getY() + cellsInitialPoint + cellSize/2, getOrientation() );		
		canvas.drawImage( sprite, spriteSize * actualFrame, 0, spriteSize, spriteSize, -cellSize/2, -cellSize/2, cellSize, cellSize);
		canvas.restoreContext();
	};
	function init(){
		drawRotatedImage();
	};
	
	init();
	
	return {
		newFrame: newFrame,
		newStep: newStep
	}
};