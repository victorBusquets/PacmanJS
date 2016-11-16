var Canvas = function( domId ){
	// Atributes //
	var canvas   = document.getElementById( domId ),
		context  = canvas.getContext("2d");
	
	// GET's AND SET's //
	var getCanvas = function(){
		return canvas;
	},
	getHeight = function(){
		return canvas.height;
	},
	getWidth = function(){
		return canvas.width;
	},
	getDomId = function(){
		return domId;
	},
	getContext = function(){
		return context;
	};
	
	//METHODS
	var setFont = function(font){
		context.font = font;
	},
	resetOpacity = function(){
		context.globalAlpha = 1;
	},
	setOpacity = function(opacity){
		context.globalAlpha = opacity;
	},
	setColor = function( color ){
		context.fillStyle = color;
	},
	setTextAlign = function(type){
		context.textAlign = type; 
	},
	setVerticalAlign = function(type){
		context.textBaseline = type; 
	},
	fillRect = function( startX, startY, endX, endY, color ){
		if( color != undefined ) setColor( color );
		context.fillRect( startX, startY, endX, endY );
	},
	fillText = function( value, startY, startX, color, align ){
		context.textAlign= align || "center";
		if( color != undefined ) setColor( color );
		context.fillText( value, startY, startX );
	},
	fillFullRect = function( color ){
		if( color != undefined ) setColor( color );
		context.fillRect( 0, 0, canvas.width, canvas.height );
	},
	fillCircle = function( x, y, radius, color ){
		context.fillStyle = color;
		context.beginPath();
		context.arc( x, y, radius,0, 2 * Math.PI );
		context.closePath();
		context.fill();
	},
	strokeCircle = function( x, y, radius, color, lineWidth ){
		strokeLimitedCircle(x, y, radius, color, 0, 2 * Math.PI, lineWidth );
	},
	strokeLimitedCircle = function( x, y, radius, color, startAngle, endAngle, lineWidth ){
		context.beginPath();
		context.arc( x, y, radius, startAngle, endAngle, false );
		context.lineWidth = lineWidth || 2;
		context.strokeStyle = color;
		context.stroke();
	},
	translateContext = function(x, y ){
		context.save();
		context.translate( x, y );
	},
	rotateContext = function( x, y, degrees ){
	    translateContext( x, y );
		context.rotate( degrees * Math.PI/180 );
	},
	restoreContext = function(){
		context.restore();
	},
	drawImage = function( img, startX, startY, width, height, destinationX, destinationY, destinationWidth, destinationHeight ){
		if(destinationX != undefined){
			context.drawImage( img, startX, startY, width, height, destinationX, destinationY, destinationWidth, destinationHeight );
		}else{
			context.drawImage( img, startX, startY, width, height );
		}
	};
	
	return {
		getHeight: getHeight,
		getWidth: getWidth,
		getCanvas: getCanvas,
		getDomId: getDomId,
		getContext: getContext,
		setColor: setColor,
		setFont: setFont,
		setTextAlign: setTextAlign,
		setVerticalAlign: setVerticalAlign,
		fillRect: fillRect,
		fillText: fillText,
		fillFullRect: fillFullRect,
		fillCircle: fillCircle,
		strokeCircle: strokeCircle,
		strokeLimitedCircle: strokeLimitedCircle,
		drawImage: drawImage,
		resetOpacity: resetOpacity,
		setOpacity: setOpacity,
		rotateContext: rotateContext,
		restoreContext: restoreContext
	};
};