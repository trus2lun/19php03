document.write("<div class='ban_co'>");
// Dung vong for cho hang
for (var j = 0; j < 8; j++) {
	// Dung vong for nay cho cot
	for (var i = 0; i < 8; i++) {
		if ((j + i) % 2 == 0) {
			document.write("<div class='box_black'></div>");
		} else {
			document.write("<div class='box_white'></div>");
		}
	}
}