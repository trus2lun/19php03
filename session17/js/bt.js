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
 	var username, password;
 	//lấy giá trị của input username
 	username = document.getElementById('username').value;
 	password = document.getElementById('password').value;
 	if (username == '') {
 		document.getElementById('errorUsername').innerHTML = 
 		'Please input your username';
    } else {
    	document.getElementById('errorUsername').innerHTML = '';
    }
    if (password == '') {
 		document.getElementById('errorPassword').innerHTML = 
 		'Please input your password';
 	} else {
 		document.getElementById('errorPassword').innerHTML = '';
 	}
 	if ((username != '') && (password != '')) {
 		document.getElementById('textSuccess').innerHTML = 'Register Success';
 	}
}