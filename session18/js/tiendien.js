/**
	*Description: Hàm Tính Tiền Điện
	*Create by: Hoàng Phúc
	*Created: 19:43 17/09/2019
**/
function TienDien() {
	var name, first_date, last_date, first_number, last_number;
//Hoặc khai báo biến theo kiểu camel case
//var name, firstDate, lastDate, firstNumber, lastNumber

//Lấy giá trị họ và tên từ input có id là name
	name = document.getElementById('name').value;
	first_date = document.getElementById('first_day').value;
	last_date = document.getElementById('last_day').value;
	first_number = document.getElementById('first_number').value;
	last_number = document.getElementById('last_number').value;

//validate các input không được để trống
	if (name == '') {
		document.getElementById('errorName').innerHTML = 
		'Nhap ten vao';
	} else {
		document.getElementById('errorName').innerHTML = '';
	}
	if (first_date == '') {
		document.getElementById('errorFirstDate').innerHTML = 
		'Nhap ngay vao';
	} else {
		document.getElementById('errorFirstDate').innerHTML = '';
	}
	if (last_date == '') {
		document.getElementById('errorLastDate').innerHTML = 
		'Nhap ngay vao';
	} else {
		document.getElementById('errorLastDate').innerHTML = ''
	}
	if (first_number == '') {
		document.getElementById('errorFirstNumber').innerHTML =
		'Nhap so vao';
	} else {
		document.getElementById('errorFirstNumber').innerHTML = '';	
	}
	if (last_number == '') {
		document.getElementById('errorLastNumber').innerHTML = 
		'Nhap so vao';
	} else {
		document.getElementById('errorLastNumber').innerHTML = '';
	}
}