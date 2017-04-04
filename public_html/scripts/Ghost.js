function Ghost( index, name, ghostSprite, position, free ){
	var character = new Character( position, ghostSprite, 0, 0, 16,	0 ),
		startPosition = new Position( 13, 11),
		firsTime = true,
		free = free || false;
	
	function update( pacmanPosition, validAreaCallback ){
		if(free){
			var newPosition = this["getNew" +name+ "Position"]( position, pacmanPosition, validAreaCallback );
			
			position.setX( newPosition.getX() );
			position.setY( newPosition.getY() );
		}	
	};
	//--> CODE DEPELOPE HERE --->
	function getNewBlinkyPosition( ghostPosition, pacmanPosition, validAreaCallback ){	
		return ghostPosition;
	};
	//<--- CODE DEPELOPE HERE <---
	function clear( clearCellCallback ){
		if(free) clearCellCallback( position );
	};
	function paintCell( paintCellCallback ){
		if(free) paintCellCallback( position );
	};
	function paint( drawGhostCallback, cellsInitialPoint ){
		if( firsTime || free ) character.drawImagePositioned( drawGhostCallback, cellsInitialPoint, index );
		if(firsTime) firsTime = false;
	};
	
	return {
		update: update,
		paint: paint,
		clear: clear,
		paintCell: paintCell,
		getNewBlinkyPosition: getNewBlinkyPosition
	}
};

