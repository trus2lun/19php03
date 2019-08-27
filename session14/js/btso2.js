//Nhập vào 1 số có từ 1 đến 4 chữ số. 
//In ra cách đọc số đó bằng tiếng Việt 
var x = prompt("Nhap so x", "0");
document.write(x)
function doc_so(so) {
	var = so;
	document.write(so);
	if (so < 10000) {
		document.write(so);
		document.write('<br>');
	} else {
		return so ;
	}
}