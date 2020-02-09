# 1/5/2020
# python lists

word_to_check = input("Enter a word to check if it's a palindrome: ")
char_list = list(word_to_check)

print(char_list[0], char_list[-1])

# if char_list[0] == char_list[-1]:
#     print('First and last letter match match')


# check = 0
# for x in char_list:
#     if char_list[x] == char_list[(x * -1)]:
#         print('char list if loop worked')
#         check = check + 1


# if len(char_list) == check:
#     print('its a palindrome')

# print(len(char_list))
# print(check)


# x = "malayalam"
w = "" 
for i in word_to_check: 
    w = i + w 
    if (word_to_check==w): 
        print("YES") 