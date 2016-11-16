/*
	a-0 -> j-0  Casillas normales mas rotacion
	p0 -> Casilla de punto
	s0 -> Casilla de superpunto
	t0 -> Casilla de teletransporte
*/
const DEFAULT_MAP = {
	size:{
		x:30,
		y:33
	},
	teleportPoints: [
		{
			id:0,
			x:15,
			y:0
		},
		{
			id:1,
			x:15,
			y:29	
		}
	],
	value: 	"f3c0c0c0c0c0c0c0c0c0c0c0c0c0i0j0c0c0c0c0c0c0c0c0c0c0c0c0c0f0c3p0p0p0p0p0p0p0p0p0p0p0p0p0b1b3p0p0p0p0p0p0p0p0p0p0"+
			"p0p0p0c1c3p0d3b2b2d0p0d3b2b2b2b2d0p0b1b3p0d3b2b2b2b2d0p0d3b2b2d0p0c1c3s0b1a0a0b3p0b1a0a0a0a0b3p0b1b3p0b1a0a0a0a0"+
			"b3p0b1a0a0b3s0c1c3p0d2b0b0d1p0d2b0b0b0b0d1p0d2d1p0d2b0b0b0b0d1p0d2b0b0d1p0c1c3p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0"+
			"p0p0p0p0p0p0p0p0p0p0p0c1c3p0d3b2b2d0p0d3b2d0p0d3b2b2b2b2b2b2d0p0d3b2d0p0d3b2b2d0p0c1c3p0b1a0a0b3p0b1a0b3p0d2b0b0"+
			"d0d3b0b0d1p0b1a0b3p0b1a0a0b3p0c1c3p0d2b0b0d1p0b1a0b3p0p0p0p0b3b1p0p0p0p0b1a0b3p0d2b0b0d1p0c1c3p0p0p0p0p0p0b1a0d2"+
			"b0b0d0a0b3b1a0d3b2b2d1a0b3p0p0p0p0p0p0c1f2c2c2c2c2d0p0b1a0a0a0a0b3a0b3b1a0b1a0a0a0a0b3p0d3c2c2c2c2f1a0a0a0a0a0c3"+
			"p0b1a0d3b0b0d1a0d2d1a0d2b0b0d0a0b3p0c1a0a0a0a0a0a0a0a0a0a0c3p0b1a0b3a0a0a0a0a0a0a0a0a0a0b1a0b3p0c1a0a0a0a0a0a0a0"+
			"a0a0a0c3p0b1a0b3a0h3c0c0a0a0c0c0h0a0b1a0b3p0c1a0a0a0a0a0c0c0c0c0c0d1p0d2b0d1a0c3a0a0a0a0a0a0c1a0d2b0d1p0d2c0c0c0"+
			"c0c0t0a0a0a0a0a0p0a0a0a0a0c3a0a0a0a0a0a0c1a0a0a0a0p0a0a0a0a0a0t0c2c2c2c2c2d0p0d3b2d0a0c3a0a0a0a0a0a0c1a0d3b2d0p0"+
			"d3c2c2c2c2c2a0a0a0a0a0c3p0b1a0b3a0h2c2c2c2c2c2c2h1a0b1a0b3p0c1a0a0a0a0a0a0a0a0a0a0c3p0b1a0b3a0a0a0a0a0a0a0a0a0a0"+
			"b1a0b3p0c1a0a0a0a0a0a0a0a0a0a0c3p0b1a0b3a0d3b0b0b0b0b0b0d0a0b1a0b3p0c1a0a0a0a0a0a0a0a0a0a0c3p0b1a0b3a0b1a0a0a0a0"+
			"a0a0b3a0b1a0b3p0c1a0a0a0a0a0f3c0c0c0c0d1p0d2b0d1a0d2b2b2d0d3b2b2d1a0d2b4d1p0d2c0c0c0c0f0c3p0p0p0p0p0p0p0p0p0p0p0"+
			"p0p0b1b3p0p0p0p0p0p0p0p0p0p0p0p0p0c1c3p0d3b2b2d0p0d3b2b2b2b2d0p0b1b3p0d3b2b2b2b2d0p0d3b2b2d0p0c1c3p0d2b0d0b3p0d2"+
			"b0b0b0b0d1p0d2d1p0d2b0b0b0b0d1p0b1d3b0d1p0c1c3s0p0p0b1b3p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0b1b3p0p0s0c1e3b2d0p0"+
			"b1b3p0d3b2d0p0d3b2b2b2b2b2b2d0p0d3b2d0p0b1b3p0d3b2i1i3b0d1p0d2d1p0b1a0b3p0d2b0b0d0d3b0b0d1p0b1a0b3p0d2d1p0d2b0e1"+
			"c3p0p0p0p0p0p0b1a0b3p0p0p0p0b1b3p0p0p0p0b1a0b3p0p0p0p0p0p0c1c3p0d3b2b2b2b2d1a0d2b0b0d0p0b1b3p0d3b2b2d1a0d2b2b2b2"+
			"b2d0p0c1c3p0d2b0b0b0b0b0b0b0b0b0d1p0d2d1p0d2b0b0b0b0b0b0b0b0b0d1p0c1c3p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0p0"+
			"p0p0p0p0p0p0p0c1f2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2f1"
};