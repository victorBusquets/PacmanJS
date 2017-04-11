function Markers( canvas, pacmanSprite, cellSize, totalPoints ){
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
		canvas.fillRect( 0, canvas.getHeight()-30 , canvas.getWidth()/2, 30, 'black');
	};
	function paintLifes(){
		clearLifes();
		
		for(var i=0; i<remainingLifes; i++){
			canvas.rotateContext( 50+ (20*i), canvas.getHeight()-15, 3*90 );
			canvas.drawImage( pacmanSprite, cellSize, 0, cellSize, cellSize, -cellSize/2, -cellSize/2, cellSize, cellSize );
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
		canvas.setFont('15px Arial');
		canvas.fillText( score, canvas.getWidth()/2+50, 20, 'white', 'right' );
	};
	function clearScore(){		
		canvas.fillRect(canvas.getWidth()/2-70, 20 , 140, 20, 'black');
	};
	function paintScoreTittle(){
		canvas.setFont('20px Arial');
		canvas.fillText( SCORE_TITLE, canvas.getWidth()/2, 1, 'white', 'center' );
	};
	function paintPause(){
		canvas.setFont('20px Arial');
		canvas.fillText( PAUSED_TITLE, canvas.getWidth()/2, canvas.getHeight()-30, 'white', 'center' );
	};
	function clearPause(){
		canvas.fillRect(canvas.getWidth()/2-70, canvas.getHeight()-30 , 140, 40, 'black');
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