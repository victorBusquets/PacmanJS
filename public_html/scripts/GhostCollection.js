function GhostCollection( ghostSprite ){
	var collection = new Array();
	
	function createGhosts(){
		collection[0] = new Ghost( 0, 'Blinky', ghostSprite, new Position( 13, 11), true );
		collection[1] = new Ghost( 1, 'Pinky', ghostSprite, new Position( 11.5, 13) );
		collection[2] = new Ghost( 2, 'Inky', ghostSprite, new Position( 13.5, 13) );
		collection[3] = new Ghost( 3, 'Clyde', ghostSprite, new Position( 15.5, 13) );
	};
	function paint( drawGhostCallback, cellsInitialPoint ){
		collection.map(function( ghost ){
			ghost.paint( drawGhostCallback, cellsInitialPoint);
		});
	};
	function update( pacmanPosition, validAreaCallback ){
		collection.map(function( ghost ){
			ghost.update( pacmanPosition, validAreaCallback );
		});
	};
	function clear(clearCellCallback){
		collection.map(function( ghost ){
			ghost.clear( clearCellCallback );
		});
	};
	function paintCell( paintCellCallback ){
		collection.map(function( ghost ){
			ghost.paintCell( paintCellCallback );
		});		
	};
	function init(){
		createGhosts();
	};
	
	init();
	
	return {
		paintCell: paintCell,
		update: update,
		clear: clear,
		paint: paint
	}
};