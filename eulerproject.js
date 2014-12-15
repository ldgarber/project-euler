//problem 1
$(document).ready(function(){

	$("#prob1").click(function(){
		$("#prob1answer").text(sumOfMultiples(1000)); 
		$("#prob1answer").css("display", "block"); 
		$("#prob1").hide(); 
		return false; 
	}); 
	$("#prb1submit").click(function(){
		var input = $("#p1").val(); 
		$("#prob1answer2").text(sumOfMultiples(input)); 
		$("#prob1answer2").css("display", "block"); 
		return false; 
	}); 
	
	$("#prob2").click(function(){
		$("#prob2answer").text(sumOfEvenFibs(4000000)); 
		$("#prob2answer").css("display", "block"); 
		$("#prob2").hide(); 
		return false; 
	}); 
	
	$("#prob3").click(function(){
		$("#prob3answer").text(largestPrimeFactor(600851475143)); 
		$("#prob3answer").css("display", "block"); 
		return false; 
	}); 
	$("#prb3submit").click(function(){
		var input = $("#p3").val(); 
		$("#prob3answer2").text(largestPrimeFactor(input)); 
		$("#prob3answer2").css("display", "block"); 
		return false; 
	});
	
}); 

	function sumOfMultiples(max){
		var sum = 0; 
		for (var i = 3; i < max; i++){
			if (i % 3 == 0 || i % 5 == 0) {
				sum = sum + i; 
				}
			}
		return sum; 
	};
	function fib(n){
	//recursive fibonacci function - returns nth fibonacci number (starting w/ 1 and 2)
		if (n === 0) {
			return 1; 
		}else if (n === 1) {
			return 2; 
		}else {
			return fib(n-1) + fib(n-2); 
		}
	}
	function sumOfEvenFibs(max){
		var sum = 0; 
		var i = 0; 
		var current = fib(i); 
		for (i; current< max; i=i+1){
			if (current % 2 == 0){
				sum = sum + current; 
			}
			current = fib(i + 1); 
		}
		return sum; 
	}
	isPrime = function(n) {
		if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
		if (n===2) return true; 
		if (n % 2 === 0 || 
			n % 3 === 0) {
			return false; 
		}
		for (var i = 5; i <= Math.sqrt(n); i += 6 ) {
			if (n % i === 0 ||
				n % (i + 2) === 0) {
				return false; 
			}
		
			}
		return true; 
}; 
	largestPrimeFactor = function(n) {
		if (isPrime(n)) {return n};  
		for (var i = 2; i <= n; i++) {
			if (n % i === 0) {
				if (isPrime(n/i)) {
       	         return n/i;   
					}
				}
			}
  	  return; 
}; 