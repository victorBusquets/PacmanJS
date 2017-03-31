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
	function getNewblinkyPosition( ghostPosition, pacmanPosition, validAreaCallback ){
		var difference = pacmanPosition.getDifference( ghostPosition ),
			options = new Array(),
			order, 
			firstSubOrder, 
			secondSubOrder;
			
		function priorityInDirection( difference, direction ){
			return ( difference>0 ? ( direction=='x' ? '13' : '20' ) : ( direction=='x' ? '31' : '02' ) );
		};
		
		if( difference.x < difference.y ){
			firstSubOrder = 	priorityInDirection( difference.x, 'x' );
			secondSubOrder = 	priorityInDirection( difference.y, 'y' );
		}else{
			firstSubOrder = 	priorityInDirection( difference.y, 'y' );
			secondSubOrder = 	priorityInDirection( difference.x, 'x' );
		}
		
		order = firstSubOrder[0] + secondSubOrder + firstSubOrder[1];
		
		options[ order[0] ] = {
			position: new Position( ghostPosition.getX(), ghostPosition.getY()-1 ),
			orientation: 0
		};
		options[ order[1] ] = {
			position: new Position( ghostPosition.getX()+1, ghostPosition.getY() ),
			orientation: 1
		};
		options[ order[2] ] = {
			position: new Position( ghostPosition.getX(), ghostPosition.getY()+1 ),
			orientation: 2
		};
		options[ order[3] ] = {
			position: new Position( ghostPosition.getX()-1, ghostPosition.getY() ),
			orientation: 3
		};
		optionSelected = (validAreaCallback(options[0].position) ? '0' : validAreaCallback(options[1].position) ? '1' : validAreaCallback(options[2].position) ? '2' : '3');
		character.setOrientation( options[optionSelected].orientation );
		
		return options[optionSelected].position;
	};
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
		getNewblinkyPosition: getNewblinkyPosition
	}
};

