//Nhập vào 3 số, in ra số lớn nhất trong 3 số
var a = prompt("Nhap so dau tien", "0");
var b = prompt("Nhap so thu 2", "0");
var c = prompt("Nhap so thu 3", "0");
document.write(a);
document.write('<br>');
document.write(b);
document.write('<br>');
document.write(c);
document.write('<br>');

function maxNumber(so1, so2, so3) {
	so1 = parseInt(so1);
    so2 = parseInt(so2);
    so3 = parseInt(so3);
    var max = so1;
	if (max < so2) max = so2;
	if (max < so3) max = so3; 
	return max;
} 
document.write('so lon nhat trong 3 so:' + a + ',' + b + ', ' + c);
document.write(' la so: ' + maxNumber(a, b, c));
document.write('<br>');
