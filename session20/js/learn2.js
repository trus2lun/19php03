$('.hide').click(function () {
	$('.demo').hide(3000);
})
$('.show').click(function () {
	$('.demo').show(3000).css("color","blue");
})
$('.fadein').click(function () {
	$('.demo').fadeIn("slow");
})
$('fadeout').click(function () {
	$('.demo').fadeOut();
})
// slideDown()
// slideUp()
// slideToggle()

$('.animation_right').click(function(){
	$('.demo2').animate({'left':'60%'});
});
$('.animation_left').click(function(){
	$('.demo2').animate({'left':'0%'})
});