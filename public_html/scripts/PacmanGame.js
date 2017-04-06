function PacmanGame( canvas, map, cellSize, cellSprite, cellValues, pacmanCharacter, ghostCollection ){
	const AMOUNT_SCORE_POINTS = 100,
		  AMOUNT_SCORE_SUPERPOINTS = 400;
	
	var cellsInitialPoint = new Position(0, 48), //ESTO DEBERIA SER CALCULADO EN FUNCION DEL MAP SIZE!!!!
		rowSize = map.size.x,
		loopIndex = 0,
		direction = 0,
		lastDirection = 0,
		score = 0,
		remainingLifes = 2,
		remainingPoints;
	
	function paintFullMap(){
		for(var y=0; y<map.size.y; y++){
			for(var x=0; x<map.size.x; x++){
				paintCell(new Position(x,y));
			}		
		}
	};
	function paintCell( position ){	
		var x = position.getX(),
			y = position.getY(),
			cellValue = map.value[ y * (rowSize) + x ][0],
			rotate = map.value[ y * (rowSize) + x ][1];

		if(cellValue!='a' && cellValue!='t'){
			var spriteStartX = ( cellValues.indexOf( cellValue ) ) * cellSize;

			canvas.rotateContext( cellSize*x + cellsInitialPoint.getX() + cellSize/2, cellSize*y + cellsInitialPoint.getY() + cellSize/2, rotate*90 );
			canvas.drawImage( cellSprite, spriteStartX, 0, cellSize, cellSize, -cellSize/2, -cellSize/2, cellSize, cellSize );
			canvas.restoreContext();
		}
	};
	function clearCell( position ){
		var x = position.getX(),
			y = position.getY();
			
		canvas.fillRect(cellSize*x + cellsInitialPoint.getX(), cellSize*y + cellsInitialPoint.getY() , cellSize, cellSize, 'black');
	};
	function paintBlackFullRect(){
		canvas.fillFullRect("black");
	};
	function paintPacmanCharacter(){
		var pacmanPosition = pacmanCharacter.getPosition();
		canvas.rotateContext( cellSize*pacmanPosition.getX() + cellsInitialPoint.getX() + cellSize/2, cellSize*pacmanPosition.getY() + cellsInitialPoint.getY() + cellSize/2, pacmanCharacter.getOrientation() );
		pacmanCharacter.drawImage( canvas.drawImage );
		canvas.restoreContext();
	};
	function getMapValue( position ){
		return map.value[ position.getY() * (rowSize) + position.getX() ][0];
	};	
	function validArea( position ){
		var value = getMapValue(position);
		return 'tspa'.indexOf(value)>=0;
	};
	function keyEvent( keyCode ){
		direction = ( keyCode>=37 && keyCode<=40 ? keyCode : direction );
	};
	function checkEatPoint( position ){
		var pointValue = getMapValue( position );
		
		if( isPointPosition( pointValue ) ){
			updateScore( getPointsOfPoint( pointValue[0] ) );
			updateRemainingPoints();
			map.value[ position.getY() * (rowSize) + position.getX() ] = 'a0';
		}
	};
	function isPointPosition(value){/*-----*/
		return 'ps'.indexOf(value) >= 0;
	};
	function loop(){
		var position = pacmanCharacter.getPosition();
		
		pacmanCharacter.newFrame();
		
		if(loopIndex%5 == 0){
			var x = position.getX(),
				y = position.getY(),
				newPosition = position.getNewPositionWithDirection(direction),
				newPositionOldDirection = position.getNewPositionWithDirection(lastDirection);
				
			if(validArea(newPosition)){
				lastDirection = direction;	
				pacmanCharacter.setPosition(newPosition);
				checkEatPoint(position);
			}else if(validArea(newPositionOldDirection)){
				direction = lastDirection;
				pacmanCharacter.setPosition(newPositionOldDirection);
				checkEatPoint(position);
			}else if( isTeleportPoint(position, newPosition) ){
				newPosition = DEFAULT_MAP.teleportPoints[ position.equalPosition(DEFAULT_MAP.teleportPoints[0]) ? 1 : 0 ];
				pacmanCharacter.setPosition(newPosition);
			}		

			pacmanCharacter.setOrientation(direction);
		}
		if(loopIndex%10 == 0){
			ghostCollection.clear( clearCell );
			ghostCollection.paintCell( paintCell );
			ghostCollection.update( pacmanCharacter.getPosition(), validArea );
			ghostCollection.paint( canvas.drawImage, cellsInitialPoint );
		}

		clearCell(position);
		paintPacmanCharacter();		
		
		loopIndex++;
	};
	function isTeleportPoint(position, newPosition){/*-----*/
		return (
			(
				(newPosition.getX()<0 || newPosition.getX()>=map.size.x)
					||
				(newPosition.getY()<0 || newPosition.getY()>=map.size.y)
			)
			&&
			(
				position.equalPosition(map.teleportPoints[0]) 
					||
				position.equalPosition(map.teleportPoints[1]) 
			)
		);
	};
	//SCORE FUNCTIONS
	function getPointsOfPoint( pointType ){
		return ( pointType === 'p' ? AMOUNT_SCORE_POINTS : AMOUNT_SCORE_SUPERPOINTS );
	};
	function updateScore( newPoints ){
		score += newPoints;
		paintScore(score);
	};
	function paintScore(score){
		clearScore();
		canvas.setFont('15px Arial');
		canvas.fillText( score, canvas.getWidth()/2+50, 20, 'white', 'right' );
	};
	function clearScore(){		
		canvas.fillRect(canvas.getWidth()/2-70, 20 , 140, 20, 'black');
	};
	//END SCORE FUNCTIONS
	//MARKERS FUNCTIONS
	function paintMarkers(){
		paintScoreTittle();
		paintScore('00');
		paintLifes();
	};
	function clearLifes(){		
		canvas.fillRect( 0, canvas.getHeight()-30 , canvas.getWidth()/2, 30, 'black');
	};
	function paintLifes(){
		clearLifes();
		
		for(var i=0; i<remainingLifes; i++){
			canvas.rotateContext( 50+ (20*i), canvas.getHeight()-15, 3*90 );
			pacmanCharacter.drawImage( canvas.drawImage, 1 );
			canvas.restoreContext();
		}
	};
	function paintScoreTittle(){
		canvas.setFont('20px Arial');
		canvas.fillText( 'HIGH  SCORE', canvas.getWidth()/2, 1, 'white', 'center' );
	};
	//END MARKERS FUNCTIONS
	function updateRemainingPoints(){
		remainingPoints -= 1;
	};
	function countPoints(){
		remainingPoints = (map.value.match(/[p,s]/g) || []).length;
	};
	function splitMap(){
		map.value = map.value.match(/.{1,2}/g);
	};
	function paintGame(){
		paintBlackFullRect();
		paintFullMap();
		paintMarkers();		
		paintPacmanCharacter();	
		ghostCollection.paint( canvas.drawImage, cellsInitialPoint );
	};
	function init(){
		countPoints();
		splitMap();
		paintGame();
		
		setInterval( function(){loop();}, 60 );
	};
	
	init();
	
	return {
		getMapValue: getMapValue,
		paintGame: paintGame,
		keyEvent: keyEvent
	};
};