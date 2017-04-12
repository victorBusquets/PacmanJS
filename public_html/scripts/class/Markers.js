function Markers( canvas, pacmanSprite, cellSize, totalPoints, spriteSize ){
	const 	SCORE_TITLE = 'HIGH  SCORE',
			PAUSED_TITLE = 'PAUSED',
			AMOUNT_SCORE_POINTS = 100,
			AMOUNT_SCORE_SUPERPOINTS = 400;
	
	var remainingPoints = totalPoints,
		remainingLifes = 2,
		score = 0;
		
	function updateRemainingPoints(){
		remainingPoints -= 1;
	};
	function clearLifes(){		
		canvas.fillRect( 0, canvas.getHeight()-cellSize*2 , canvas.getWidth()/2, 30, 'black');
	};
	function paintLifes(){
		var rotation = 3*90,
			margin = cellSize*3;
			
		clearLifes();
		
		for(var i=0; i<remainingLifes; i++){
			canvas.rotateContext( margin + (cellSize*2*i), canvas.getHeight()-cellSize*1.5, rotation );
			canvas.drawImage( pacmanSprite, spriteSize, 0, spriteSize, spriteSize, -cellSize/2, -cellSize/2, cellSize, cellSize );
			canvas.restoreContext();
		}
	};
	function newFoodPosition( pointType ){
		updateRemainingPoints();
		updateScore( pointType === 'p' ? AMOUNT_SCORE_POINTS : AMOUNT_SCORE_SUPERPOINTS );
	};
	function updateScore( newPoints ){
		score += newPoints;
		paintScore(score);
	};
	function paintScore(score){
		clearScore();
		canvas.setFont(cellSize+'px Arial');
		canvas.fillText( score, canvas.getWidth()/2+ cellSize*4.5, cellSize*2, 'white', 'right' );
	};
	function clearScore(){		
		canvas.fillRect(canvas.getWidth()/2-cellSize*5, cellSize*2 , cellSize*10, cellSize*2, 'black');
	};
	function paintScoreTittle(){
		canvas.setFont( cellSize+5 +'px Arial');
		canvas.fillText( SCORE_TITLE, canvas.getWidth()/2, 1, 'white', 'center' );
	};
	function paintPause(){
		canvas.setFont( cellSize+5 +'px Arial');
		canvas.fillText( PAUSED_TITLE, canvas.getWidth()/2, canvas.getHeight()-cellSize*2, 'white', 'center' );
	};
	function clearPause(){
		canvas.fillRect(canvas.getWidth()/2-cellSize*5, canvas.getHeight()-cellSize*2 , cellSize*10, 40, 'black');
	};
	function init(){
		paintScoreTittle();
		paintScore('00');
		paintLifes();
	};
	
	init();
	
	return {
		newFoodPosition: newFoodPosition,
		paintPause: paintPause,
		clearPause: clearPause
	};
};