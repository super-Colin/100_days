# 12/13/2019
# Learning Python

import bs4 as bs
import urllib.request

sauce = urllib.request.urlopen('https://pythonprogramming.net/introduction-scraping-parsing-beautiful-soup-tutorial/').read()

soup = bs.BeautifulSoup(sauce, 'lxml')

# print(soup.title.text)

# print(soup.p)
# print(soup.find_all('p'))


# for paragraph in soup.find_all('p'):
#     print(paragraph.text)


# print(soup.get_text())

# Grab all the links on a page
for url in soup.find_all('a'):
    print(url.get('href'))