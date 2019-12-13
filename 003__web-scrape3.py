# 12/13/2019
# Learning Python

import bs4 as bs
import urllib.request

source = urllib.request.urlopen('https://pythonprogramming.net/introduction-scraping-parsing-beautiful-soup-tutorial/').read()
soup = bs.BeautifulSoup(source, 'lxml')

# nav = soup.nav
# # print(nav)
# for url in nav.find_all('a'):
#     print(url.get('href'))

# body = soup.body
# for paragraph in body.find_all('p'):
#     print(paragraph.text)

# find all div with class_ = '....'
for div in soup.find_all('div', class_='container'):
    print(div)
    # print(div.text)

