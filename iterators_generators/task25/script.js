function poe() {
	
	let elems = document.querySelectorAll('p');
	let entries = elems.keys();
	let i = 1;
	for(let elem of entries){
		document.getElementById(i).innerHTML += elem;
		i++
	}
}