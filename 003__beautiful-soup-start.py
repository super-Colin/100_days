# 12/13/2019
# Learning Python

import bs4 as bs
import urllib.request

sauce = urllib.request.urlopen('https://pythonprogramming.net/introduction-scraping-parsing-beautiful-soup-tutorial/').read()

soup = bs.BeautifulSoup(sauce, 'lxml')

# This will print out all the source HTML for the supplied URL
print(soup)
