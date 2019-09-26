$(document).ready( function () {
	var num = 1;
	$("img").each(function () {
		if ($(this).is(':visible')) {
			num = $(this).attr("num");
		}
	})

	$("#next").click(function () {
		next = num++;
		$("img").hide();
		alert(next);
		$("img").eq(next).show();
	});

	$("#prev").click(function () {
		prev = num--;
		$("img").show();
		alert(next);
		$("img").eq(next).show();
	});
})