var result = '';
function addChar(number) {
	result += number;
	document.getElementById('result').innerHTML = result;
}
function calresult() {
	document.getElementById('result').innerHTML = eval(result);
}
function delCal() {
	result = '';
	document.getElementById('result').innerHTML = '0';
}
function backCal() {
	var newResult;
	if (result != '') {
		newResult = result.substring(0, result.length - 1);
		document.getElementById
	}
}