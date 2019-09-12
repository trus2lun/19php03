var x = 5;
var y = " Van Hau is a Vietnamese footballer who plays as a left-back";

console.log(typeof x);
console.log(typeof y);
document.write('<br>' + y);
// Kiem tra chieu dai cua string
document.write('<br>' + y.length);
console.log(y.length);
// Tìm vị trí của kí tự trong string
document.write('<br>' + y.indexOf('i'))
console.log(y.indexOf('i'));

//TÌm vị trí của ký tự nằm cuối cùng trong string
document.write('<br>' + y.lastIndexOf('a'));
console.log(y.lastIndexOf('a'));

// Cắt chuỗi ký tự trong string
// Cách 1 cắt từn vị trí đến vị trí
document.write('<br>' + y.substring(2, 10));
console.log(y.substring(2, 10));

// Cách 2 cắt từ vị trí, với chiều dài cho trước
document.write('<br>' + y.substr(1, 10));
console.log(y.substr(1, 10));

// Nếu tìm không thấy ký tự trong string thì trả về giá trị -1
// Tìm vị trí của ký tự nằm đầu tiên trong string
document.write('<br>' + y.indexOf('d'));
console.log(y.indexOf('d'));

// BT1 : Đếm xem chuoi tren co bao nhieu chu "a"
var myStr = "Van Hau is a Vietnamese footballer who plays as a left-back";
var charSearch = 'a';
var count = 0;
var newMyStr = '';
while (myStr.indexOf(charSearch) != -1) {
	count++;
	newMyStr = myStr.substring(myStr.indexOf(charSearch) + 1, myStr.length);
	myStr = newMyStr;
}
document.write('<br> Co' + count + ' ky tu a trong chuoi "'+ y + '"');
// BT2 (Nâng cao bài 1): Viết hàm truyền vào 1 chuỗi và 1 ký tự, 
// kiểm tra có bao nhiêu ký tự đó trong chuỗi 
function countCharInString(charSearch, myStr) {
	var count = 0;
	var newMyStr = '';
	while (myStr.indexOf(charSearch) != -1) {
		count++;
		newMyStr = myStr.substring(myStr.indexOf(charSearch) + 1, myStr.length);
		myStr = newMyStr;
	}
	return count;
}
document.write('<br>');
document.write(countCharInString('a', 'I am Chad! I am from Da Nang'));

//BT3:
//Dùng prompt để nhập họ và  tên vào theo mẫu : Lê Văn Tuấn
//( tức là họ và tên đệm, tên cách nhau bởi dấu cách - khoảng trống)
//Đếm xem họ và tên đầy đủ có bao nhiêu ký tự? (không tính khoảng trống)
//Đến xem học có bao nhiêu ký tự?
var myName = prompt('Please input your name!');
document.write('<br>' + myName.length);
console.log(myName.length);
var count = 0;
var newMyName = '';
var charSearch = ' ';
while (myName.indexOf(charSearch) != -1) {
	count++;
	newMyName = myName.substring(myName.indexOf(charSearch) + 1, myName.length);
	myName = newMyName;
}
document.write('<br>' + count);

//BT4: Cũng như BT2, nhưng ký tự tìm kiếm không phân biệt là 1 ký tự
//hay nhiều ký tự. Ví dụ: countCharInString('am', 'I am Chad!'
function countCharInString(charSearch, newMyStr) {
	var mySt = prompt('Nhap vao na');
	var count = 0;
	var newMySt = '';
	while (mySt.indexOf(charSearch) != -1) {
		count++;
		newMySt = mySt.substring(mySt.indexOf(charSearch) +charSearch.length, mySt.length);
		mySt = newMySt;
	}
	return count;
}
//BT5: Tiếp tục bài 4, nhưng nếu tìm được ký tự/ chuỗi ký tự trong
//string thì in ra string với ký tự/ chuỗi ký tự đó màu vàng

//Van Hau
//-> V<span>a</span>n H<span>a</span>n

//BT6: Nhập vào 1 chuỗi bằng prompt
// Đếm xem trong chuỗi đó ký tự nào nhiều nhất?
// Ký tự nào ít xuất hiện nhất
//Nếu bằng nhau thì hiển thị 1 cái nhất là được

//BT7: Cung nhu BT6 nhung khong biet chu Hoa hoac Thuong.
// Vi du: a va A thi tinh la a
// (nghien cuu 2 phuong thuc upperCase() vaf lowerCase())

//document.write('<br>' + y.toUpperCase());
//document.write('<br>' + y.toLowerCase());

// Nghien cuu them phuong thuc replace: thay the ky tu/chuoi ky tu