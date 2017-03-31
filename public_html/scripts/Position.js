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
	
	return {
		getX: getX,
		getY: getY,
		setX: setX,
		setY: setY,
		getDifference: getDifference,
		equalPosition: equalPosition
	};
};