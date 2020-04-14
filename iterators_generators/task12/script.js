let object = {
	a: 3,
	b: 4,
	c: 2,
	d: 56,
	[Symbol.iterator]: function *() {
		for (let key in object){	
			yield object[key]
		}
	}
}

for (let elem of object){
	console.log(elem)
}