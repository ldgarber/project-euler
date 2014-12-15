//logs the sum of all even fibonacci numbers whose values are lower than 4000000

fib = function(n) {
//recursive fibonacci function - returns nth fibonacci number (starting w/ 1 and 2)
	if (n === 0) {
		return 1; 
	}else if (n === 1) {
		return 2; 
	}else {
		return fib(n-1) + fib(n-2); 
	}
}
var sum = 0; 
var i = 0; 
var current = fib(i); 
for (i; current< 4000000; i=i+1){
	if (current % 2 == 0){
		sum = sum + current; 
	}
	current = fib(i + 1); 
}
console.log(sum); 