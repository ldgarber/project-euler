def sumOfMultiples(max) 
	#returns sum of all multiples of 3 or 5 from  0 up to (but not including) max
	multiples = []
	(3...max).step(3) {|num| multiples << num unless num % 15 == 0}
	(5...max).step(5) { |num| multiples << num}
	sum = multiples.inject() {|result, n| result + n}
	#note: multiples is NOT a sorted array
	return sum
end

p sumOfMultiples(1000)