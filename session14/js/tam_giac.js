var soDong = 4;
	for (var i = 1; i <= soDong; i++) {
		document.write('<br>');
		for (var j = 1; j <= i; j++) {
			document.write('*' + '&nbsp;&nbsp;');
		}
	}
document.write('<br>');	
document.write('------<br>');
var x = prompt("Nhap chieu cao tam giac");
document.write('<table>');
for (var i=0; i<x; i++) 
{
	document.write('<tr>');
	for (var k=x-1; k>i; k--) 
	{
		document.write('<td>');
		document.write(' ');
		document.write('</td>')
	}
	for (var k=1; k<=i*2+1 ; k++) 
	{
		document.write('<td>');
		document.write('*');
		document.write('</td>');
	}
	document.write('</tr>');
}	
document.write('</table>');
    