//Taọ form tính tiền điện gồm:

//1) Họ tên, số điện đầu kỳ, số điện cuối kỳ, ngày đầu kỳ, ngày cuối kỳ

//2) Validate các trường nhập không được để trống

//Số điện cuối kỳ phải >= số diện đầu kỳ, 
//ngày cuối kỳ phải lớn hơn hoặc bằng ngày đầu ky

//3) Tính tiền điện với: 100 số đầu tiên tính giá 1.500 VND/số; 
//200 số tiếp theo tính 2.000 VND/số; còn lại tính 3.500 VND/số

//4) In ra màn hình phiếu tính tiền điện cơ bản: 
//Họ tên...Tính điện từ ngày...
//đến ngày...sử dụng...số với số tiền là:....
function validateRegister() {
 	var name, number, day;
 	//lấy giá trị của input username
 	name = document.getElementById('name').value;
 	number = document.getElementById('number').value;
 	day = document.getElementById('day').value;
 	if (name == '') {
 		document.getElementById('errorName').innerHTML = 
 		'Please input your name';
    } else {
    	document.getElementById('errorName').innerHTML = '';
    }
    if (number == '') {
 		document.getElementById('errorNumber').innerHTML = 
 		'Please input your number';
 	} else {
 		document.getElementById('errorNumber').innerHTML = '';
 	}
 	if (day == '') {
 		document.getElementById('errorDay').innerHTML =
 		'Please input your day';
 	} else {
 		document.getElementById('errorDay').innerHTML = '';
 	}
 	if ((name != '') && (number != '') && (day != '')) {
 		document.getElementById('mixi').innerHTML = 'Register Success';
 	}
}