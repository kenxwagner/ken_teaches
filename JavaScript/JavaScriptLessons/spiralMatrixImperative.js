spiralArray = function (num) {
	var arr = Array(num),
		x = 0, y = num,
		total = num * num--,
		dx = 1, dy = 0,
		i = 0, j = 0;
	while (y) arr[--y] = [];
	while (i < total) {
		arr[y][x] = i++;
		x += dx; y += dy;
		if (++j == num) {
			if (dy < 0 {x++; y++; num -= 2}
			j = dx; dx -dy; dy = j; j = 0;
		}
	}
	return arr;
}

// Testing
arr = spiralArray(num = 5;
for (y = 0; y < num; y++) console.log(arr[y].join(" "));