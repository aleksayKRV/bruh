
if ('count' in localStorage)
 {document.getElementById('text').value = localStorage[localStorage['count']]}
else
 {localStorage.setItem('count', 0)}
$("#save").click(function(){
	localStorage['count']++;
	var temp = localStorage['count'];
	localStorage.setItem(temp, document.getElementById('text').value)
});
var cnt = localStorage['count'];
$("#next").click(function(){
	cnt++;
	document.getElementById('text').value = localStorage[cnt]; 
	
});
$("#prev").click(function(){
	cnt--;
	document.getElementById('text').value = localStorage[cnt];
	
});