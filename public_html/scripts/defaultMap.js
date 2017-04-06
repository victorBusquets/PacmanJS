/*
	a-0 -> j-0  Casillas normales mas rotacion
	p0 -> Casilla de punto
	s0 -> Casilla de superpunto
	t0 -> Casilla de teletransporte
*/
const DEFAULT_MAP = {
	size:{
		x:28,
		y:29
	},
	teleportPoints: [
		new Position(0,13),
		new Position(27,13)
	],
	value: 	"f3c0c0c0c0c0c0c0c0c0c0c0c0i0j0c0c0c0c0c0c0c0c0c0c0c0c0f0"+
			"c3p0p0p0p0p0p0p0p0p0p0p0p0b1b3p0p0p0p0p0p0p0p0p0p0p0p0c1"+
			"c3p0d3b2b2d0p0d3b2b2b2d0p0b1b3p0d3b2b2b2d0p0d3b2b2d0p0c1"+
			"c3s0b1a0a0b3p0b1a0a0a0b3p0b1b3p0b1a0a0a0b3p0b1a0a0b3s0c1"+
			"c3p0d2b0b0d1p0d2b0b0b0d1p0d2d1p0d2b0b0b0d1p0d2b0b0d1p0c1"+
			"c3p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0c1"+
			"c3p0d3b2b2d0p0d3d0p0d3b2b2b2b2b2b2d0p0d3d0p0d3b2b2d0p0c1"+
			"c3p0d2b0b0d1p0b1b3p0d2b0b0d0d3b0b0d1p0b1b3p0d2b0b0d1p0c1"+
			"c3p0p0p0p0p0p0b1b3p0p0p0p0b3b1p0p0p0p0b1b3p0p0p0p0p0p0c1"+
			"f2c2c2c2c2d0p0b1d2b0b0d0a0b3b1a0d3b2b2d1b3p0d3c2c2c2c2f1"+
			"a0a0a0a0a0c3p0b1d3b0b0d1a0d2d1a0d2b0b0d0b3p0c1a0a0a0a0a0"+
			"a0a0a0a0a0c3p0b1b3a0a0a0a0a0a0a0a0a0a0b1b3p0c1a0a0a0a0a0"+
			"c0c0c0c0c0d1p0d2d1a0h3c0c0x0x0c0c0h0a0d2d1p0d2c0c0c0c0c0"+
			"t0a0a0a0a0a0p0a0a0a0c3a0a0a0a0a0a0c1a0a0a0p0a0a0a0a0a0t0"+ //<- CENTER
			"c2c2c2c2c2d0p0d3d0a0h2c2c2c2c2c2c2h1a0d3d0p0d3c2c2c2c2c2"+
			"a0a0a0a0a0c3p0b1b3a0a0a0a0a0a0a0a0a0a0b1b3p0c1a0a0a0a0a0"+
			"a0a0a0a0a0c3p0b1b3a0d3b0b0b0b0b0b0d0a0b1b3p0c1a0a0a0a0a0"+
			"f3c0c0c0c0d1p0d2d1a0d2b2b2d0d3b2b2d1a0d2d1p0d2c0c0c0c0f0"+
			"c3p0p0p0p0p0p0p0p0p0p0p0p0b1b3p0p0p0p0p0p0p0p0p0p0p0p0c1"+
			"c3p0d3b2b2d0p0d3b2b2b2d0p0b1b3p0d3b2b2b2d0p0d3b2b2d0p0c1"+
			"c3p0d2b0d0b3p0d2b0b0b0d1p0d2d1p0d2b0b0b0d1p0b1d3b0d1p0c1"+
			"c3s0p0p0b1b3p0p0p0p0p0p0p0a0a0p0p0p0p0p0p0p0b1b3p0p0s0c1"+
			"e3b2d0p0b1b3p0d3d0p0d3b2b2b2b2b2b2d0p0d3d0p0b1b3p0d3b2i1"+
			"i3b0d1p0d2d1p0b1b3p0d2b0b0d0d3b0b0d1p0b1b3p0d2d1p0d2b0e1"+
			"c3p0p0p0p0p0p0b1b3p0p0p0p0b1b3p0p0p0p0b1b3p0p0p0p0p0p0c1"+
			"c3p0d3b2b2b2b2d1d2b0b0d0p0b1b3p0d3b2b2d1d2b2b2b2b2d0p0c1"+
			"c3p0d2b0b0b0b0b0b0b0b0d1p0d2d1p0d2b0b0b0b0b0b0b0b0d1p0c1"+
			"c3p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0c1"+
			"f2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2f1"
};