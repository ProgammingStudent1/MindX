text = "X-DSPAM-Confidence:    0.8475 abc"
numPos = text.find(':')
num = text[numPos+1:]
print(num.strip())