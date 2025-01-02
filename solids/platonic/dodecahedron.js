// shape definition
// platonic - dodecahedron

Shapes["Dodecahedron"] = {
	verts: [
		[-PHI/2, PHI/2, -PHI/2],
		[PHI/2, PHI/2, -PHI/2],
		[-PHI/2, PHI/2, PHI/2],
		[PHI/2, PHI/2, PHI/2],
		[-PHI/2, -PHI/2, -PHI/2],
		[PHI/2, -PHI/2, -PHI/2],
		[-PHI/2, -PHI/2, PHI/2],
		[PHI/2, -PHI/2, PHI/2],
		[0, PHI**2/2, 0.5],
		[0, PHI**2/2, -0.5],
		[-0.5, 0, -(PHI**2)/2],
		[0.5, 0, -(PHI**2)/2],
		[PHI**2/2, 0.5, 0],
		[PHI**2/2, -0.5, 0],
		[0, -(PHI**2)/2, 0.5],
		[0, -(PHI**2)/2, -0.5],
		[-0.5, 0, PHI**2/2],
		[0.5, 0, PHI**2/2],
		[-(PHI**2)/2, -0.5, 0],
		[-(PHI**2)/2, 0.5, 0],
	],
	faces: [
		[1,12,3,8,9],
		[0,9,8,2,19],
		[17,3,12,13,7],
		[12,1,11,5,13],
		[17,16,2,8,3],
		[16,17,7,14,6],
		[15,14,7,13,5],
		[14,15,4,18,6],
		[18,19,2,16,6],
		[0,19,18,4,10],
		[0,10,11,1,9],
		[11,10,4,15,5],
	]
}