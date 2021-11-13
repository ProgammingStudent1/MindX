text = "X-DSPAM-Confidence:    0.8475"
numPos = text.find('0.8475')
print(float(text[numPos:]))