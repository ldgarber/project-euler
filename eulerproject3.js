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
	for (var i = 2; i <= n; i++) {
		if (n % i === 0) {
			if (isPrime(n/i)) {
                return n/i;   
				}
			}
		}
    return; 
}; 

console.log(largestPrimeFactor(600851475143)); 