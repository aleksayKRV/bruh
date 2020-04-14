function *crit(obj) {
	for(let key in obj){
		yield obj[key]
	}
}
let iterator = crit({a: 1, b: 2, c: 3, d: 4, e: 5})
for(let elem of iterator){
	console.log(elem)
}