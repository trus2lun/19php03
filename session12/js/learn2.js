// Ve nha nghien cuu truoc:
// Vong lap for, while, do while
// Cau dieu kien: if else, switch case
// Tham so cua ham, tham so mac dinh
function mySum() {
	var a = 5, b = 7;
	document.write(a + b);
}
document.write('<br>');
mySum();

function mySum2() {
	var a = 6, b = 9;
	var c;
	c = a + b;
	return c;
}

document.write('<br>');
var x;
x = mySum2();
document.write(x);

// tham so cua ham
function mySum3(a, b) {
	var c;
	c = a + b;
	return c;
}

document.write('<br>');
var y;
y = mySum3(4, 8);
document.write(y);


document.write('<br>');
document.write(mySum3(5, 3));

// tham so mac dinh cua ham
function mySum4(a = 9, b = 2) {
	var c;
	c = a + b;
	return c;
}

document.write('<br>');
document.write(mySum4());

document.write('<br>')
// cau lenh dieu kien 
//1.
//if (dieukien) {
	// thuc hien cac lenh o day neu dieukien la dung
//}
var a = 5;
if (a == 5) {
	document.write("So a la 5 ")
}

document.write('<br>')
//2.
//if (dieukien) {
	//thuc hien cac lenh o day neu diekien la dung
//} else {
	// Thuc hien cac lenh o day neu dieu kien la sai
// }
var a = 4;
if (a == 5) {
	document.write("So a khong phai la 5");
} else {
	document.write("So a khong phai la 5 <br>");
	document.write("-------- <br>");
	document.write("test if else")
}
//3.
//if (dieukien1) {
	//thuc hien cac lenh o day neu diekien1 la dung
// } else if (dieukien2) {
	// Thuc hien cac lenh o day neu dieu kien2 la dung
// }
// } else {
	// thuc hien cac lenh o day neu dieukien2 la sai
// }
document.write('<br>');

var a = 7;
if (a == 5) {
	document.write("So a la so 5");
} else if (a == 6) {
	document.write("So a la so 6");
} else {
	document.write("So a khong phai la so 5 hoac so 6<br>");
}


//
document.write('<br>');

var a = 4;
var b = 7;
if ((a == 5) || (a == 8)) {
	document.write("So a la so 5 hoac la 8");
} else if ((a == 6) && (b == 7)) {
	document.write("So a la so 6 va b = 7");
} else {
	document.write("So a khong phai la 5 hoac 6 hoac 8<br> ");
}

// switch(ten_bien) {
//  case '1':
      // thuc hien cac cau lenh o day, neu gia tri bien bang 1
//    break;
 
//  case '2':
      // thuc hien cac cau lenh o day, neu gia tri bien bang 2
//    break;
      //...........
      //...........
//  default:
       // thuc hien cac cau lenh o day, neu gia tri bien khac cac truong hop phia tren
//    break;
// }

//Ex: cho mot so a cho truoc gia tri;
//Kiem tra neu so co gia tri tu 1 den 7 thu
//ghi ra cac ngay trong tuan tuong ung
// vd : a = 1 thi ghi ra: hom nay la thu hai
// vd : a = 2 thi ghi ra: hom nay la thu ba
//....
//vd: a=7 thi ghi ra hom nay la chu nhat 
//Neu khong thi in ra: a khong la ngay trong tuan


document.write('<br>');
var myDay = 4;
switch(myDay) {
	case 1:
	  document.write("hom nay la thu hai");
	  break;
	case 2:
	  document.write("hom nay la thu ba");
	  break;
	case 3:
	  document.write("hom nay la thu tu");
	  break;
	case 4:
	  document.write("hom nay la thu nam<br>");
	  break;
	case 5:
	  document.write("hom nay la thu sau");
	  break;
	case 6:
	  document.write("hom nay la thu bay");
	  break;
	case 7:
	  document.write("hom nay la chu nhat");
	  break;
	default:
	  document.write("khong co thu nao trong tuan");
	  break;
}

// Cho 1 so cho truoc la gia tri cua thang trong nam tu 1 toi 12
// Neu so do khac tu 1-12 thi in ra la so nay khong phai thang cua nam
// Neu so do la thang cua nam, in ra so ngay cua thang do
// Cho them 1 so cho truoc la so nam ( ví dụ :2019)
// Kiem tra nam do nhuan hay khong? de in ra dung so ngay cua thang 2
document.write('<br>'); 
var myMonth = 2;
var myYear = 2019;
// thang 1, 3, 5, 7, 8, 10, 12 co 31 ngay
// thang 4, 6, 9, 11 co 30 ngay
// thang 2 co 28 ngay, neu nam nhuan thi thang 2 co 29 ngay
// nam nhuan la nam chia het cho 4 nhung khong chia het cho 100
var a = 5
switch(a) {
	case 1 :
	   document.write("day la thang 1<br>")
	   break;
	case 2 :
	   document.write("day la thang 2")
	   break;
	case 3 :
	   document.write("day la thang 3")
	   break;
	case 4 :
	   document.write("day la thang 4")
	   break;
	case 5 :
	   document.write("day la thang 5")
	   break;
	case 6 :
	   document.write("day la thang 6")
	   break;
	case 7 :
	   document.write("day la thang 7")
	   break;
	case 8 :
	   document.write("day la thang 8")
	   break;
	case 9 :
	   document.write("day la thang 9")
	   break;
	case 10 :
	   document.write("day la thang 10")
	   break;
	case 11 :
	   document.write("day la thang 11")
	   break;
	case 12 :
	   document.write("day la thang 12")
	   break; 
	default :
	   document.write("so nay khong phai thang cua nam")
	   break;
}
document.write('<br>');
// vong lap
// cac cau lenh hoac hanh dong duoc lap di lap lai nhieu lan
// thi ap dung vong lap de thuc hien
for (var i = 0; i <= 10; i++) {
	document.write(i);
	document.write('<br>');
}
// i++ tuong ung voi: i=i+1;
// i-- tuong ung voi: i=i-1;
document.write('<br>');
for (var j = 10; j >= 0; j--) {
	document.write(j);
	document.write('<br>');
}
document.write('----------<br>');
// vong lap while kiem tra truoc roi moi in
var n = 5;
while (n < 10) {
	document.write(n);
	document.write('<br>');
	n++;
}
// vong lap do while in roi moi kiem tra
document.write('-----------<br>')
var n = 5;
do {
	document.write(n);
	document.write('<br>');
	n++;
} while (n < 10)
// cho mot day so chay tu 1 toi 100
// Kiem tra
// Neu so do chia het cho 3 thi in ra so n chia het cho 3
// Neu so do chia het cho 5 thi in ra so n chia het cho 5
// Neu so do chia het cho 15 thi in ra so n chia het cho 15
// (luc nay khong in ra 2 dong n chia het cho 3 va dong n chi het cho 5 )
// nguoc lai thi in ra n khong chia het cho 3,5 va 15
//VD: 1 khong chia het cho 3, 5, 15
//VD: 2 khong chia het cho 3, 5, 15
//VD: 3 khong chia het cho 3
//VD: 5 khong chia het cho 5
//VD: 4 khong chua het cho 3, 5, 15
//VD: 15 khong chia het cho 15
//VD: 20 khong chia het cho 5
document.write('---------<br>');
for (var i = 1; i <= 100; i++) {
	document.write(i);
	document.write('<br>');
	if (i % 15== 0){
	document.write(i + ' chia het cho 15');
	document.write('<br>')
} else if (i % 3 == 0) {
	document.write(i + ' chia het cho 3');
	document.write('<br>')
} else if (i % 5 == 0) {
	document.write(i + ' chia het cho 5');
	document.write('<br>')
} else {
	document.write(i + ' khong chia het cho 3 va 5 va 15');
}
}
//BT1: Bình có 27 quyển sách, 
//Bình có số sách gấp 3 lần số sách của Minh. 
//Hỏi Bình phải chuyển cho Minh bao nhiêu 
//quyển sách để số sách của Bình gấp đôi số sách của Minh?
document.write('------------<br>');
var x = 27
var y = x / 3
document.write('so sach cua Binh la ' + x);
document.write('<br>')
document.write('so sach cua Minh la ' + y);
document.write('<br>')
document.write('so sach cua Binh chuyen cho Minh de so sach cua Binh gap doi so sach cua Minh la ' + z);