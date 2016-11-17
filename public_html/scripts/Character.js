var Character = function( position, spriteUrl, actualFrame, numberOfFrames, size, orientation, cellSize){
	var sprite = new Image();

	var getPosition = function(){
		return position;
	},
	setPositionX = function(newPositionX){
		position.x = newPositionX;
	},
	setPositionY = function(newPositionY){
		position.y = newPositionY;
	},
	setPosition = function(newPosition){
		setPositionX( newPosition.x );
		setPositionY( newPosition.y );
	},
	loadSprite = function( spriteUrl ){
		sprite.src = spriteUrl;
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
		orientation = newOrientation;
	},
	init = function(){
		loadSprite( spriteUrl );
	},
	drawImage = function(drawImageCallBack){
		drawImageCallBack( sprite, size*actualFrame, 0, size, size, -size/2, -size/2, size, size);
	};
	
	init();
	
	return {
		getPosition: getPosition,
		setPosition: setPosition,
		getFrame: getFrame,
		setFrame: setFrame,
		setPositionY: setPositionY,
		setPositionX: setPositionX,
		getOrientation: getOrientation,
		setOrientation: setOrientation,
		drawImage: drawImage
	}
};