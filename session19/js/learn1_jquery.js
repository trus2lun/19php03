$('.change_content').click(function () {
	$('#demo1').html('Demo 1 change content');
	//document.getElementById('demo1').innerHTML = 'Demo 1 change content';
});
$('#change_attribute').click(function () {
	$('.demo2').attr('src','image/souma.png');
	$('.demo2').attr('alt','souma-conan');
});
$('#register').click(function () {
	var name = $('#name').val();
	alert(name);
})