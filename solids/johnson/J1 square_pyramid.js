// J1 Square pyramid

h = 0.5 * Math.sqrt(2);

Shapes["Square Pyramid"] = {
	verts: [
		[0.5, 0.5, -0.5 * h],
		[-0.5, 0.5, -0.5 * h],
		[-0.5, -0.5, -0.5 * h],
		[0.5, -0.5, -0.5 * h],
		[0, 0, 0.5 * h],
	],
	faces: [
		[0, 1, 2, 3],
		[0, 4, 1],
		[1, 4, 2],
		[2, 4, 3],
		[3, 4, 0],
	]
}