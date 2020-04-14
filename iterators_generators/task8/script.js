function *it(arr) {
	for(let i = 0; i<arr.length; i++)
	{
		if (arr[i+1] == undefined){
			yield arr[i]
			console.log([arr[i]])
			
		}
		else if (i == 0 || i % 2 == 0){
			yield arr[i]
			console.log([arr[i], arr[i+1]])
		}
		else {
			yield arr[i]
		}

	}
}
let iterator = it([1,2,3,4,5,6,7,8,9]);
for(let elem of iterator){
}
