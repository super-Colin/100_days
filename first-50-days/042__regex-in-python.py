# 1/21/2020
# Taking some regex into Python

# https://www.w3schools.com/python/python_regex.asp
# https://www.rexegg.com/regex-quickstart.html

import re



with open('./sample.txt', 'r') as text_file:
    sample_text = text_file.read()
# print(sample_text)


# regex_result = re.search("^a", sample_text)

# regex_result = re.findall("\s[d?b?v?w?]*.?.?a+.?.?[l?d?r?]*\s", sample_text)

# regex_result = re.findall("\s\w\w\w\s", sample_text)
# regex_result = re.findall("\s\w{1,8}\.\s", sample_text)
# regex_result = re.findall("\s{2,8}", sample_text)

# find all 3 letter words
# regex_result = re.findall("\s[^\s].{3}[^\s]\s", sample_text)
# regex_result = re.findall("\s[^\s].[^\s]\s", sample_text)

regex_result = re.findall("\s[a-g]{2,8}\s", sample_text)


print(regex_result)


