function ScreenAdapter(){
	var device = false,
		height = 0,
		width = 0,
		cellSize = 0,
		gameCellSize = { width:28, height:36 };
	
	function isDevice(){
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	};
	function getHeightAndWidth(){
		height 	= $(window).height();
		width 	= $(window).width();
	};
	function getCellSize(){
		return ( isDevice() ? width/gameCellSize.width : parseInt(height/gameCellSize.height) );
	};
	function getCanvasHeight(){
		return cellSize*gameCellSize.height;
	};
	function getCanvasWidth(){
		return cellSize*gameCellSize.width;
	};
	function getCanvasMarginTop(){
		return (height - cellSize * gameCellSize.height)/2;
	};
	function getCanvasSizeConfiguration(){
		return {
			'margin':	getCanvasMarginTop(),
			'height':	getCanvasHeight(),
			'width':	getCanvasWidth()
		};
	};
	function init(){
		getHeightAndWidth();
		cellSize = getCellSize();
	};

	init();
	
	return {
		getCanvasSizeConfiguration: getCanvasSizeConfiguration,
		getCellSize: getCellSize,
		isDevice: isDevice
	}
}