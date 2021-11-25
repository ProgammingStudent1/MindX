import re

sumAll = 0
hand = open('ex11.txt')
for line in hand:
    line = line.rstrip()
    x = re.findall('[0-9]+', line)
    for num in x:
        value = int(num)
        sumAll = sumAll + value
print(sumAll)


#The file contains much of the text from the introduction of the textbook except
#that random numbers are inserted throughout the text.
#Here is a sample of the output you might see:


#Why should you learn to write programs? 7746
#12 1929 8827
#Writing programs (or programming) is a very creative 
#7 and rewarding activity.  You can write programs for 
#many reasons, ranging from making your living to solving
#8837 a difficult data analysis problem to having fun to helping 128
#someone else solve a problem.  This book assumes that 
#everyone needs to know how to program ...


#In this assignment you will read through and parse a file with text and numbers.
#You will extract all the numbers in the file and compute the sum of the numbers.