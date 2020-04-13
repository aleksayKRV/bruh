//адание1
console.log("-задание1")
let d = Symbol();
let obj1 = {
	a: 1,
	b: 2,
	c: 3,
	[d]: 'aaaaaa'
}
for (let key in obj1) {
			console.log(key);
		}



//задание2
console.log("-задание2")
let func2 = Symbol();
let obj2 = {
	a: 1,
	b: 2,
	c: 3,
	[func2]: function(){alert('!')}
}
obj2[func2]();


//задание3
let func3 = Symbol("func");
let tempr = 0;
let obj3 = {
	a: 1,
	b: 2,
	c: 3,
	[func3]: function() {
		for (let key in this) {
			tempr += obj3[key]
		}
	}
	}
obj3[func3]();
console.log(tempr);


//задание4
console.log('-задание4')
let temp = 0; 
let sum = Symbol();
let arr4 = [1, 2, 3];
arr4[sum] = function(){temp = this.reduce(function(a,b){
    return a + b
  }, 0)}
arr4[sum]();
console.log(temp);


//задание5
console.log('-задание5')
let temp1 = 0; 
let sum1 = Symbol.for("sum1");
let arr5 = [1, 2, 3];
arr5[sum1] = function(){temp1 = this.reduce(function(a,b){
    return a + b
  }, 0)}
arr5[sum1]();
console.log(temp1);


//задание6
//я не хочу это делать