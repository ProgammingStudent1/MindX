x = str(input("Kiem tra: "))
wordList = ["abc", "abd", "what"]
def is_valid_word(check):
    for word in wordList:
        if check.lower() == word.lower():
            return "Hop le"
        else:
            return "Khong hop le"
print(is_valid_word(x))
