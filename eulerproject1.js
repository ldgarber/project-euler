function sumOfMultiples(max){
	var sum = 0; 
	for (var i = 3; i < max; i++){
		if (i % 3 == 0 || i % 5 == 0) {
			sum = sum + i; 
			}
		}
	return sum; 
}
return sumOfMultiples(1000); 
