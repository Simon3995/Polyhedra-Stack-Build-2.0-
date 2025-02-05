// shape definition
// archimedean - truncated isosahedron

import { PHI } from '../../math.js';
import { scaleVectorList } from '../../util.js';

export default {
	"Truncated Icosahedron": {
		category: "Archimedean",
		verts: scaleVectorList([
			[0, 1, (3*PHI)],
			[(3*PHI), 0, 1],
			[1, (3*PHI),0],
			[0, 1, -(3*PHI)],
			[-(3*PHI), 0, 1],
			[1, -(3*PHI),0],
			[0, -1, (3*PHI)],
			[(3*PHI), 0, -1],
			[-1, (3*PHI),0],
			[0, -1, -(3*PHI)],
			[-(3*PHI), 0, -1],
			[-1, -(3*PHI),0],
			[1, (2+PHI), (2*PHI)],
			[(2*PHI), 1, (2+PHI)],
			[(2+PHI), (2*PHI), 1],
			[1, (2+PHI), -(2*PHI)],
			[-(2*PHI), 1, (2+PHI)],
			[(2+PHI), -(2*PHI), 1],
			[1, -(2+PHI), (2*PHI)],
			[(2*PHI), 1, -(2+PHI)],
			[-(2+PHI), (2*PHI), 1],
			[1, -(2+PHI), -(2*PHI)],
			[-(2*PHI), 1, -(2+PHI)],
			[-(2+PHI), -(2*PHI), 1],
			[-1, (2+PHI), (2*PHI)],
			[(2*PHI), -1, (2+PHI)],
			[(2+PHI), (2*PHI), -1],
			[-1, (2+PHI), -(2*PHI)],
			[-(2*PHI), -1, (2+PHI)],
			[(2+PHI), -(2*PHI), -1],
			[-1, -(2+PHI), (2*PHI)],
			[(2*PHI), -1, -(2+PHI)],
			[-(2+PHI), (2*PHI), -1],
			[-1, -(2+PHI), -(2*PHI)],
			[-(2*PHI), -1, -(2+PHI)],
			[-(2+PHI), -(2*PHI), -1],
			[PHI, 2, (2*PHI+1)],
			[(2*PHI+1), PHI, 2],
			[2, (2*PHI+1), PHI],
			[PHI, 2, -(2*PHI+1)],
			[-(2*PHI+1), PHI, 2],
			[2, -(2*PHI+1), PHI],
			[PHI, -2, (2*PHI+1)],
			[(2*PHI+1), PHI, -2],
			[-2, (2*PHI+1), PHI],
			[PHI, -2, -(2*PHI+1)],
			[-(2*PHI+1), PHI, -2],
			[-2, -(2*PHI+1), PHI],
			[-PHI, 2, (2*PHI+1)],
			[(2*PHI+1), -PHI, 2],
			[2, (2*PHI+1), -PHI],
			[-PHI, 2, -(2*PHI+1)],
			[-(2*PHI+1), -PHI, 2],
			[2, -(2*PHI+1), -PHI],
			[-PHI, -2, (2*PHI+1)],
			[(2*PHI+1), -PHI, -2],
			[-2, (2*PHI+1), -PHI],
			[-PHI, -2, -(2*PHI+1)],
			[-(2*PHI+1), -PHI, -2],
			[-2, -(2*PHI+1), -PHI],
		], 1/2),
		faces: [
			/* clockwise
			[0, 48, 24, 12, 36],
			[38, 2, 50, 26, 14],
			[44, 20, 32, 56, 8],
			[16, 28, 52, 4, 40],
			[6, 42, 18, 30, 54],
			[25, 13, 37, 1, 49],
			[7, 43, 19, 31, 55],
			[15, 27, 51, 3, 39],
			[10, 58, 34, 22, 46],
			[33, 21, 45, 9, 57],
			[41, 17, 29, 53, 5],
			[47, 11, 59, 35, 23],
			[0, 36, 13, 25, 42, 6],
			[0, 6, 54, 28, 16, 48],
			[13, 36, 12, 38, 14, 37],
			[42, 25, 49, 17, 41, 18],
			[18, 41, 5, 11, 47, 30],
			[30, 47, 23, 52, 28, 54],
			[52, 23, 35, 58, 10, 4],
			[4, 10, 46, 32, 20, 40],
			[40, 20, 44, 24, 48, 16],
			[24, 44, 8, 2, 38, 12],
			[37, 14, 26, 43, 7, 1],
			[43, 26, 50, 15, 39, 19],
			[29, 55, 31, 45, 21, 53],
			[31, 19, 39, 3, 9, 45],
			[9, 3, 51, 22, 34, 57],
			[56, 32, 46, 22, 51, 27],
			[59, 11, 5, 53, 21, 33],
			[8, 56, 27, 15, 50, 2],
			[34, 58, 35, 59, 33, 57],
			[49, 1, 7, 55, 29, 17]
			*/
			// counterclockwise
			[36, 12, 24, 48, 0],
			[14, 26, 50, 2, 38],
			[8, 56, 32, 20, 44],
			[40, 4, 52, 28, 16],
			[54, 30, 18, 42, 6],
			[49, 1, 37, 13, 25],
			[55, 31, 19, 43, 7],
			[39, 3, 51, 27, 15],
			[46, 22, 34, 58, 10],
			[57, 9, 45, 21, 33],
			[5, 53, 29, 17, 41],
			[23, 35, 59, 11, 47],
			[6, 42, 25, 13, 36, 0],
			[48, 16, 28, 54, 6, 0],
			[37, 14, 38, 12, 36, 13],
			[18, 41, 17, 49, 25, 42],
			[30, 47, 11, 5, 41, 18],
			[54, 28, 52, 23, 47, 30],
			[4, 10, 58, 35, 23, 52],
			[40, 20, 32, 46, 10, 4],
			[16, 48, 24, 44, 20, 40],
			[12, 38, 2, 8, 44, 24],
			[1, 7, 43, 26, 14, 37],
			[19, 39, 15, 50, 26, 43],
			[53, 21, 45, 31, 55, 29],
			[45, 9, 3, 39, 19, 31],
			[57, 34, 22, 51, 3, 9],
			[27, 51, 22, 46, 32, 56],
			[33, 21, 53, 5, 11, 59],
			[2, 50, 15, 27, 56, 8],
			[57, 33, 59, 35, 58, 34],
			[17, 29, 55, 7, 1, 49]
		]
	}
}