// cho mot day so chay tu 1 toi 100
// Kiem tra
// Neu so do chia het cho 3 thi in ra so n chia het cho 3
// Neu so do chia het cho 5 thi in ra so n chia het cho 5
// Neu so do chia het cho 15 thi in ra so n chia het cho 15
// (luc nay khong in ra 2 dong n chia het cho 3 va dong n chi het cho 5 )
// nguoc lai thi in ra n khong chia het cho 3,5 va 15
for (var i = 1; i <= 100; i++) {
	document.write('<br>');
	if (i % 15== 0){
	    document.write(i + " chia het cho 15 <br>");
    } else if (i % 3 == 0) {
	    document.write(i + " chia het cho 3 <br>");
    } else if (i % 5 == 0) {
	    document.write(i + " chia het cho 5 <br>");
    } else {
	    document.write(i + " khong chia het cho 3 va 5 va 15 <br>");
    }
}
//BT1: Bình có 27 quyển sách, 
//Bình có số sách gấp 3 lần số sách của Minh. 
//Hỏi Bình phải chuyển cho Minh bao nhiêu 
//quyển sách để số sách của Bình gấp đôi số sách của Minh?
document.write('--------------BT1');
document.write('<br>');
var i = 0;
var x = 27;
var y = x / 3;
document.write("so sach cua Binh la : " + x);
document.write('<br>')
document.write("so sach cua Minh la : " + y);
while(x != (y * 2)){
	x--;
	y++;
	i++;
}
document.write('<br>');
document.write("so sach cua Binh chuyen cho Minh de so sach cua Binh gap doi so sach cua Minh la : " + i );
document.write('<br>');
//BT2: Cho ban 2000 vnđ đi mua kẹo .Biết :
//1 viên kẹo giá 200 vnđ.
//cứ 2 vỏ kẹo đổi được 1 viên.
//Hỏi với 2000 vnđ, ban sẽ mua đc bao nhiêu viên kẹo ?
document.write('--------------BT2');
document.write('<br>');
var Sotien = 2000;
var giatienkeo = 200;
function baonhieukeo(){
	var Sokeomuaduoc = Math.floor(Sotien/giatienkeo);
	var Sovokeo = Sokeomuaduoc;
	var Sokeodoiduoc = 0;
	do {
		Sokeodoiduoc = Math.floor(Sovokeo/2) ;
		Sovokeo = Sokeodoiduoc + ( Sovokeo - Sokeodoiduoc * 2  );
		Sokeomuaduoc += Sokeodoiduoc ;  
	} while( Sovokeo > 1 )
		document.write("So keo co duoc la:  ");
		document.write(Sokeomuaduoc);
}
baonhieukeo();
document.write('<br>');
//BT3. Cần có tổng 1.000.000 đồng từ 3 loại tiền 10.000 đồng, 20.000 đồng, 50.000 đồng. 
//Lập chương trình để tìm ra tất cả các phương án có thể
//gọi a là số tiền loại 10.000, b là số tiền loại 20.000, c là số tiền loại 50.000 
//hệ : 10000a + 20000b + 50000c = 1000000
document.write('--------------BT3');
document.write('<br>');
function phuonganchiatien() {
	var a,b,c,phuongan = 0;
	var tong = 1000000;
	for (var a = 0; a <= tong/10000 ; a++) {
		for (var b = 0; b < tong/20000 ; b++) {
			for (var c = 0; c <= tong/50000 ; c++) {
				if (10000*a + 20000*b + 50000*c == tong) {
					phuongan++;
				}
			}
		}
	}
	document.write("So cach chia tien: ");
	document.write(phuongan);
}
phuonganchiatien();
document.write('<br>');
//BT4. Bạn A gửi ngân hàng 20 triệu đồng, lãi suất 0.6%/tháng. 
//Hỏi sau 3 năm, bạn A nhận được cả gốc lẫn lãi là bao nhiêu?
document.write('--------------BT4');
document.write('<br>');