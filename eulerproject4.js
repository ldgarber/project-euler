var start = new Date().getTime();

function isThreeDigits(n) {
    if (n >= 100 && n <= 999) return true; 
	else return false; 
};

function threeDigitProduct(n) {
	if (n % 2 === 0) {
		for (var i = 998; i > 99; i -= 2) {
			if (n % i === 0 && isThreeDigits(n/i)) {
				return true; 
				}
			}
		}
	else {
		for (var i = 999; i > 99; i -= 2) {
			if (n % i === 0 && isThreeDigits(n/i)) {
				return true; 
				}
			}
	}
	return false; 
};

//reverse a string
function reverse(n) {
    // n is a string
    var reverse = ""; 
    for (var i = n.length - 1; i >= 0; i--) {
        reverse = reverse.concat(n.charAt(i)); 
    }
    return reverse; 
}

function makePalindrome(n) {
	//makes palindromic numbers - use to make 6 digit numbers out of 3 digit numbers
	n = n.toString(); 
	var rev = reverse(n); 
	n = n.concat(rev); 
	n = parseInt(n); 
    return n; 
}; 

//function that actually finds the largest palindromic number
//that is the product of two 3-digit numbers
for (var i = 997; i>99; i--) {
	var palindrome = makePalindrome(i); 
	if (isThreeDigitProduct(palindrome)) { 
        console.log(palindrome); 
        return palindrome; 
	} 
};

//tells how much time it took
var end = new Date().getTime();
var elapsed = end - start;

console.log("That took " + elapsed + "ms"); 