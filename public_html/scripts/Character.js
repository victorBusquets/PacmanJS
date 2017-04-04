var Character = function( position, sprite, actualFrame, numberOfFrames, size, orientation ){
//ESTO ES UNA PUTA FACTORIA!!!!
	var ghostBuster = false;

	function getPosition(){
		return position;
	};
	function setPosition(newPosition){
		position = newPosition;
	};
	function newFrame(){
		actualFrame = (actualFrame + 1  >= numberOfFrames ? 0  : actualFrame + 1 );
	};
	function getFrame(){
		return actualFrame;
	};
	function setFrame(newFrame){
		actualFrame = newFrame;
	};
	function getOrientation(){
		return orientation * 90;
	};
	function setOrientation(newOrientation){
		orientation = (newOrientation < 4 ? newOrientation : newOrientation == 37 ? 3 : newOrientation == 38 ? 0 : newOrientation == 39 ? 1 : newOrientation == 40 ? 2 : orientation);
	};
	function drawImage(drawImageCallBack, lifeMode){
		drawImageCallBack( sprite, size*( lifeMode ? 1: actualFrame ), 0, size, size, -size/2, -size/2, size, size);
	};
	function drawImagePositioned(drawImageCallBack, cellsInitialPoint, index){
		drawImageCallBack( sprite, orientation*size, index*size, size,size, size*position.getX() + cellsInitialPoint.getX(), size*position.getY() + cellsInitialPoint.getY(), size, size);
	};
	function isGhostBuster(){
		return ghostBuster;
	};
	function setGhostBuster(mode){
		ghostBuster = mode;
	}
	function init(){
		//CODE HERE
	};
	
	init();
	
	return {
		getPosition: getPosition,
		setPosition: setPosition,
		getFrame: getFrame,
		setFrame: setFrame,
		getOrientation: getOrientation,
		setOrientation: setOrientation,
		drawImagePositioned: drawImagePositioned,
		drawImage: drawImage,
		newFrame: newFrame,
		setGhostBuster: setGhostBuster,
		isGhostBuster: isGhostBuster
	}
};