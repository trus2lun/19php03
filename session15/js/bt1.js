function TinhTong() {
	var so1, so2;
	so1 = document.getElementById('so1').value;
	so1 = parseInt(so1);
	so2 = document.getElementById('so2').value;
    so2 = parseInt(so2);
	document.getElementById('tong').innerHTML = so1 + so2;
}