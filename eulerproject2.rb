# sum of even fibs starting w/ 1 and 2, up until 4000000

#make an array of fibs below 4000000? 
def fibsBelow(limit)
	fibs = [1, 2]
	i = 0
	loop do
		nextFib = fibs[i] + fibs[i+1]
		break if nextFib > limit
		fibs << nextFib
		i += 1
	end
	return fibs
end

#add up the fibs! 
def sumOfFibsBelow(limit)
	fibs = fibsBelow(limit)
	sum = fibs.inject() {|result, num| result + num}
	return sum
end

def sumOfEvenFibs(limit)
	fibs = fibsBelow(limit)
	sum = fibs.inject() {|result, num| (num % 2 == 0)? result + num : result}
	return sum
end
	
puts sumOfEvenFibs(4000000)