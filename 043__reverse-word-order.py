# 1/21/2020
# A little problem solving with regex in Python

# https://www.practicepython.org/exercise/2014/05/21/15-reverse-word-order.html


import re



sample_text = input('enter a sentence: ')



def reverse_list(input_string):
    # just cutting out any words that may or may not be surrounded by spaces
    regex_result = re.findall("\s?\w+\s?", input_string)
    output_list = []

    for word in regex_result:
        output_list.insert(0, word)

# turn our list back into a string.. unfortunately the way this works does not grab a \s at the end of the last word to add after it at the beggining of the new string
    return ''.join(output_list)

# print(regex_result)
print(reverse_list(sample_text))


