let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
map.set('d', 4);

let iterator = map.keys();

let arr = [];
let i = 0;
for (let elem of iterator){
	arr[i] = elem
	i++
}
console.log(arr);