function Position( x, y ){
	function getX(){
		return x;
	};
	function getY(){
		return y;
	};
	function setX(newX){
		x = newX;
	};
	function setY(newY){
		y = newY;
	};
	function equalPosition(position){
		return getX()==position.getX() && getY()==position.getY();
	};
	function getDifference( position ){
		return {
			x: getX() - position.getX(),
			y: getY() - position.getY()
		};
	};
	function getNewPositionWithDirection(value){
		var value  = ( value < 4 ? value : value == 37 ? 3 : value == 38 ? 0 : value == 39 ? 1 : value == 40 ? 2 : value ),
			direction = ( value == 0 ? {x:0,y:-1} : value == 1 ? {x:1,y:0} : value == 2 ? {x:0,y:1} : {x:-1,y:0} );
		
		return new Position( getX() + direction.x, getY() + direction.y );
	};
	function print(){
		return {x,y};
	}
	
	return {
		getX: getX,
		getY: getY,
		setX: setX,
		setY: setY,
		print: print, //REMOVE THIS
		getDifference: getDifference,
		equalPosition: equalPosition,
		getNewPositionWithDirection: getNewPositionWithDirection
	};
};