//BT1: Ở trung tâm giải trí Euroland có chiếc máy tự động có thể thực hiện
//được hai loại giao dịch sau:
//1) Bỏ vào 2 euro sẽ nhận được 3 USD và được tặng thêm 1 viên kẹo.
//2) Bỏ vào 5 USD sẽ nhận được 3 euro và được tặng thêm 1 viên kẹo.
//Khi Buratino đến nghịch máy đổi tiền, cậu ta chỉ có toàn USD.
//Khi cậu ta rời khỏi đó thì tiền đô bị hao hụt đi, không có thêm tiền euro
//nhưng có được 50 viên kẹo.
//Hỏi Buratino đã tốn bao nhiêu USD để có được món quà 50 viên kẹo đó?
// Gọi a là tiền Euro, b là tiền USD, c là số kẹo 
document.write('---------BT1');
document.write('<br>')
var soDola = 0;
var soEuro = 0;
var soKeo = 0;
while (soKeo < 50) {
	soDola -= 5;
	soEuro += 3;
	soKeo ++;

	while (soEuro > 0) {
		soEuro -= 2;
		soDola += 3;
		soKeo++;
	}
}
document.write('So dola ton de mua 50 keo la: ' + soDola);
document.write('<br>');
//BT2: In như hình :
//1
//2 3
//4 5 6
//7 8 9 10
//11 12 13 14 15
document.write('---------BT2')
document.write('<br>')
var soTuNhien = 1;
var soDong = 5;
	for (var i = 1; i <= soDong; i++) {
		document.write('<br>');
		for (var j = 1; j <= i; j++) {
			document.write(soTuNhien + '&nbsp;&nbsp;');
			soTuNhien++
		}
	}
document.write('<br>')