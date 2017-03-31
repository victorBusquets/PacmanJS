var Character = function( position, sprite, actualFrame, numberOfFrames, size, orientation ){
//ESTO ES UNA PUTA FACTORIA!!!!
	var getPosition = function(){
		return position;
	},
	setPosition = function(newPosition){
		position = newPosition;
	},
	newFrame = function(){
		actualFrame = (actualFrame + 1  >= numberOfFrames ? 0  : actualFrame + 1 );
	},
	getFrame = function(){
		return actualFrame;
	},
	setFrame = function(newFrame){
		actualFrame = newFrame;
	},
	getOrientation = function(){
		return orientation * 90;
	},
	setOrientation = function(newOrientation){
		orientation = (newOrientation < 4 ? newOrientation : newOrientation == 37 ? 3 : newOrientation == 38 ? 0 : newOrientation == 39 ? 1 : newOrientation == 40 ? 2 : orientation);
	},
	init = function(){
		//CODE HERE
	},
	drawImage = function(drawImageCallBack, lifeMode){
		drawImageCallBack( sprite, size*( lifeMode ? 1: actualFrame ), 0, size, size, -size/2, -size/2, size, size);
	},
	drawImagePositioned = function(drawImageCallBack, cellsInitialPoint, index){
		drawImageCallBack( sprite, orientation*size, index*size, size,size, size*position.getX() + cellsInitialPoint.getX(), size*position.getY() + cellsInitialPoint.getY(), size, size);
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
		newFrame: newFrame
	}
};